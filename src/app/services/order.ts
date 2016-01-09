import {Injectable} from 'angular2/core';
declare var AWS;

@Injectable()
export class OrderService {

  syncOrderInfo(data){
      AWS.config.region = 'us-east-1';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:5171085d-4117-4d63-8701-eb06637a7281',

      });
      AWS.config.credentials.get(() => {
          let client = new AWS.CognitoSyncManager();
          client.openOrCreateDataset('orderData', (err, dataset) => {
              dataset.put('data', JSON.stringify(data), (err, record) => {
                  localStorage.setItem('orderData', JSON.stringify(record))
              })

              dataset.synchronize({
                  onSuccess: (data, newRecords) => {
                      console.log('Successful sync', data)
                  }
              })
          })
      })
  }
};