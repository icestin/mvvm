import apiManager from './apiManager';
import xmlNative from './xmlNative';


const ajax = (url, method, data, successCB, errorCB) => {
    let dataJson = {
        version: '1.0.0',
        data: data
    };
    return xmlNative({
        method: method,
        url: url,
        data: dataJson,
        success: (data, status) => {
            if (data.code ===0 ) {
                successCB && successCB(data, status)
            } else {
                if (errorCB) {
                    console.log('失败',status);
                }
            }
        },
        error: (data, status) => {
            console.log("失败", status);
        }
    })
}

const apiRequest = {
    get: (apiName, data, successCB, errorCB) => {
        return ajax (apiManager[apiName],
            'get',
             data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemData),
        errorCB);
    },
    post: (url, data, successCB, errorCB) => {
        return ajax (apiManager[apiName],
             "post", 
              data,
              (data, status, xhr) => successCB &&  successCB(data.data. data.systemData),
              errorCB);
    }
}

export default apiRequest;