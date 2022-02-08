import {AppService} from '../src/app/app.service';

describe('General unit tests for service 1', () => {
    let appService: AppService;

    beforeEach(() => {
        appService = new AppService();
    });

    it('should return a string correctly', async () => {
        expect(appService.getData()).toEqual('Hello from service');
    })

    it('should break to test build pipeline', async () => {
        expect(true).toBeFalsy();
    })
})