import {SmsProvider} from "./sms.provider";

describe('FCM Provider', () => {
    let provider: any;

    beforeAll(async () => {
        provider = new SmsProvider;
    });

    it('Should send a message', () => {

        const spySend = jest.spyOn(provider, 'send');

        provider.send({
            receivers: ['1', '2', '3']
        });

        expect(spySend).toHaveBeenCalled();
    });
});
