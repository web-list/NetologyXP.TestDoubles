import assert from 'assert'
import { Barman } from '../src/barmen'
import { Client} from '../src/client'


suite('Stub: when client ask 200 grams of whisky', function () {

    suite('barman has enough', function () {

        test('barman pour 200 grams of whisky', function() {

            let barmanStub = {
                pour: function() {
                    return 200;
                }
            };
            let clientStub = {};
            let drinkName = 'whisky';

            let clientAskVolume = 200;

            let volumeInGlass = barmanStub.pour(drinkName, clientAskVolume, clientStub);

            assert.equal(clientAskVolume, volumeInGlass);
        });

        test('barman refuse client because he is drunken', function() {

            let barmanStub = {
                pour: function() {
                    return 0;
                }
            };

            let clientStub = {};
            let drinkName = 'tequila';
            let clientAskVolume = 100;
            barmanStub.pour(drinkName, clientAskVolume, clientStub);

            clientAskVolume = 150;
            let volumeInGlass = barmanStub.pour(drinkName, clientAskVolume, clientStub);

            assert.equal(0, volumeInGlass);
        });

    });

    suite('no whisky in bar', function () {

    });


    teardown(function() {
        console.log('teardown');
    })
});