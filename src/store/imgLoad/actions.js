import { createTypes } from 'redux-action-creator'
export const types = createTypes(['IMG_LOAD_START', 'IMG_LOAD_END', 'SET_CURRENT_PROGRESS', 'SET_IMAGES'])

export const setLoadingEnd = () => {
  return ({
    type: types.IMG_LOAD_START,
    payload: {
      isloading: false,
    },
  })
}

export const setLoadingStart = () => {
  return ({
    type: types.IMG_LOAD_END,
    payload: {
      isloading: true,
      progress: 0,
    },
  })
}

export const setCurrentProgress = (progress) => {
  return ({
    type: types.SET_CURRENT_PROGRESS,
    payload: progress,
  });
}

export const setImages = (imgs) => {
  return ({
    type: types.SET_IMAGES,
    payload: imgs,
  });
}
const imgs = [];
export const loadImage = (urls) => dispatch => {
  let counter = 0;
  dispatch(setLoadingStart());

  for(let i = 0 ; i < urls.length; i++){
    imgs.push('');
  }

  const load = (url, index) => {
    var xmlHTTP = new XMLHttpRequest();

    xmlHTTP.open('GET', url, true);
    xmlHTTP.responseType = 'blob';

    xmlHTTP.onload = function (e) {
      counter++;
      var imageURL = window.URL.createObjectURL(this.response)


      imgs[index] = imageURL

      dispatch(setCurrentProgress((counter * 100) / urls.length));

      if (counter !== 0 && counter >= urls.length) {
        setTimeout(() => {
          dispatch(setImages(imgs))
          dispatch(setLoadingEnd());
        }, 500)
      }

    };
    xmlHTTP.send();
  };

  urls.map((url, index) => {
    load(url, index);
  })
}