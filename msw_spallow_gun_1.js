/**
* Created by Il Yeup, Ahn in KETI on 2019-11-30.
*/
* Copyright (c) 2019, OCEAN
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products derived from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
  // for TAS of mission

var mqtt = require('mqtt');
var fs = require('fs');
var spawn = require('child_process').spawn;

var fc = {};
var config = {};
try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
}
catch (e) {
    config.name = 'msw_sparrow_GUN';
    config.gcs = 'KETI_MUV';
    config.drone = 'FC_MUV_01';
    config.lib = [];

    fs.writeFileSync('config.json', JSON.stringify(cse_host, null, 4), 'utf8');
}
var add_lib = {
    name: 'lib_sparrow_gun',
    target: 'arm',
    description: "[name] [portnum] [baudrate]",
    scripts: ' python3 lib_sparrow_gun.py /MUV/control/lib_sparrow_gun/MICRO /dev/ttyUSB3 9600',
    data: ['GUN'],
    control: ['MICRO']
};

config.lib.push(add_lib);

NaNfunction set_lib_config(obj_lib) {
    try {
        var scripts_arr = obj_lib.scripts.split(' ');
        var run_lib = spawn(scripts_arr[0], scripts_arr.slice(1));

        run_lib.stdout.on('data', function(data) {
            console.log('stdout: ' + data);
        });

        run_lib.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
        });

        run_lib.on('exit', function(code) {
            console.log('exit: ' + code);
        });

        run_lib.on('error', function(code) {
            console.log('error: ' + code);
        });
    }
    catch (e) {
        console.log(e.message);
    }
}
