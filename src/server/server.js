import axios from './axios';
import {message} from 'antd';

export function post (url, data, error) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            message.info('请求成功');
            resolve(res)
        }, err => {
            err = error ? error : err;
            message.info(err);
        })
    })
}
export function get (url, data, error) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            data: data
        }).then(res => {
            message.info('请求成功');
            resolve(res)
        }, err => {
            err = error ? error : err;
            message.info(err);
        })
    })
}
