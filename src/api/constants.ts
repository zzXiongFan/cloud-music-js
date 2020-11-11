// 类型选择
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export interface IArtists {
  "img1v1Id": Number,
  "topicPerson": Number,
  "alias": Array<any>,
  "picId": Number,
  "musicSize": Number,
  "albumSize": Number,
  "briefDesc": string,
  "followed": false,
  "img1v1Url": string,
  "trans": string,
  "picUrl": string,
  "name": string,
  "id": Number,
  "accountId": Number,
  "picId_str": string,
  "img1v1Id_str": string
}

export interface IBanners {
  "imageUrl": string,
  "targetId": number,
  "adid": null,
  "targetType": number,
  "titleColor": string,
  "typeTitle": string,
  "url": null,
  "exclusive": boolean,
  "monitorImpress": null,
  "monitorClick": null,
  "monitorType": null,
  "monitorImpressList": null,
  "monitorClickList": null,
  "monitorBlackList": null,
  "extMonitor": null,
  "extMonitorInfo": null,
  "adSource": null,
  "adLocation": null,
  "adDispatchJson": null,
  "encodeId": string,
  "program": null,
  "event": null,
  "video": null,
  "song": null,
  "scm": string
}

export interface IPersonalized {
  "id": number,
  "type": number,
  "name": string,
  "copywriter": string,
  "picUrl": string,
  "canDislike": boolean,
  "trackNumberUpdateTime": number,
  "playCount": number,
  "trackCount": number,
  "highQuality": false,
  "alg": string
}