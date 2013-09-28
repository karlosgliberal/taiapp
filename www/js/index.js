/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    estoyID: null,

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
      alert('alert'); 
      app.receivedEvent('deviceready');
      $('#rojo').click(function(){
        app.dondeEstoy();
      });
    },

    dondeEstoy: function(punto){
      app.estoyID = navigator.geolocation.watchPosition(onSuccess, app.onError, { enableHighAccuracy: true });
      function onSuccess(position) {
        app.enviarServidor(position);
        if(position.coords.accuracy < 50){
          navigator.geolocation.clearWatch(app.estoyID);
        }
      };
    },

    onError: function(error){
      alert('error');
    },

    enviarServidor: function(position){
      var color = 'rojo';                      
      $.ajax({
          dataType: 'jsonp',
          data: "lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&color="+color,
          jsonp: 'callback',
          url: 'http://192.168.1.61:4000/logget?callback=?',                     
          success: function(data) {
            console.log(data.more);
          }
      });
    }, 



    //TODO quitar mas adelante
    receivedEvent: function(id) {
      console.log('Received Event: ' + id);
    }
};
