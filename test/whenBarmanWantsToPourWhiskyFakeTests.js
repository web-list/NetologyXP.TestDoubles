/**
 * Created by 1 on 18.10.2016.
 */
import assert from 'assert'
import { Barman } from '../src/barmen'
import { Client} from '../src/client'


suite('Fake: when client ask 200 grams of whisky', function () {


    suite('barman has enough', function () {

        test("client is drunken", function() {

            let barmanStub = {
              pour: function() {
                  return 200;
              }
            };

            let clientFake = (function () {

                let drunkVolume = 0;
                let drink = function (volume) {
                    drunkVolume += volume;
                };

                let isDrunken = function () {
                    return (drunkVolume >= 200);
                };

                return {
                    drunkVolume: drunkVolume,
                    drink: drink,
                    isDrunken: isDrunken
                }
            })();

            let volumeInGlass = barmanStub.pour();
            clientFake.drink(volumeInGlass);

            assert.equal(clientFake.isDrunken(), true);
        });

    });

    suite('no whisky in bar', function () {

        test("barman offers client tequila", function() {

            let clientAskVolume = 200;
            let barmanFake = (function() {

                let whiskyVolume = 199;

                let answer = function(volume) {
                    if (whiskyVolume < volume) {
                        return "Maybe tequila?";
                    } else {
                        return "One minutes, please.";
                    }
                };

                return {
                    answer: answer
                }

            })();

            let answer = barmanFake.answer(clientAskVolume);
            assert.equal(answer, "Maybe tequila?")
        });

    });


    teardown(function() {
        console.log('teardown');
    })
});