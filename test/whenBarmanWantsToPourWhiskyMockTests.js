import assert from 'assert'
import sinon from 'sinon'
import { Barman } from '../src/barmen'
import { Client} from '../src/client'
import { Cupboard} from '../src/cupboard'


suite('Mock: when client ask 200 grams of whisky', function () {

    suite('barman has enough', function () {

    });

    suite('no whisky in bar', function () {
        test('barman send SMS to the boss', function () {

            let barmanMock = {
                smsSent: function(){
                    return !this.hasDrink();
                },
                hasDrink: function() {
                    return false;
                }
            };

            let bossKnowsThatNoDrinks = barmanMock.smsSent();
            assert.equal(bossKnowsThatNoDrinks, true);
        });
    });

    teardown(function() {
        console.log('teardown');
    })
});