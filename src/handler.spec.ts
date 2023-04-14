import {
    CloudFrontFunctionsEvent,
    Context,
    Callback,
    CloudFrontFunctionsCookies,
    CloudFrontFunctionsHeaders,
    CloudFrontFunctionsQuerystring,
} from 'aws-lambda';
import { handler } from './handler';

describe('handler', () => {
    const defaultHeaders: CloudFrontFunctionsHeaders = {};
    const defaultCookies: CloudFrontFunctionsCookies = {};
    const defaultQuerystring: CloudFrontFunctionsQuerystring = {};

    function createEvent(uri: string): CloudFrontFunctionsEvent {
        return {
            request: {
                method: 'GET',
                uri,
                headers: defaultHeaders,
                cookies: defaultCookies,
                querystring: defaultQuerystring,
            },
            version: '',
            context: {
                distributionDomainName: '',
                distributionId: '',
                eventType: 'viewer-request',
                requestId: '',
            },
            viewer: {
                ip: '',
            },
            response: {
                statusCode: 0,
                statusDescription: undefined,
                headers: defaultHeaders,
                cookies: defaultCookies,
            },
        };
    }

    function createContext(): Context {
        return {
            callbackWaitsForEmptyEventLoop: false,
            functionName: '',
            functionVersion: '',
            invokedFunctionArn: '',
            memoryLimitInMB: '',
            awsRequestId: '',
            logGroupName: '',
            logStreamName: '',
            getRemainingTimeInMillis: function (): number {
                throw new Error('Function not implemented.');
            },
            done: function (error?: Error | undefined, result?: any): void {
                throw new Error('Function not implemented.');
            },
            fail: function (error: string | Error): void {
                throw new Error('Function not implemented.');
            },
            succeed: function (messageOrObject: any): void {
                throw new Error('Function not implemented.');
            },
        };
    }

    const testCases = [
        {
            name: 'SHOULD NOT modify URI if it does not have a trailing slash',
            event: createEvent('/example.html'),
            expectedUri: '/example.html',
        },
        {
            name: 'SHOULD replace trailing slash with /index.html',
            event: createEvent('/'),
            expectedUri: '/index.html',
        },
        {
            name: 'SHOULD replace trailing slash with /index.html for subdirectories',
            event: createEvent('/subdir/'),
            expectedUri: '/subdir/index.html',
        },
    ];

    testCases.forEach((testCase) => {
        it(testCase.name, async () => {
            await handler(
                testCase.event,
                createContext(),
                (error, request) => {
                    expect(error).toBeNull();
                    expect(request.uri).toBe(testCase.expectedUri);
                },
            );
        });
    });
});