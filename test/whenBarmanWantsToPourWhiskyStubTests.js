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

    });

    suite('no whisky in bar', function () {

    });


    teardown(function() {
        console.log('teardown');
    })
});