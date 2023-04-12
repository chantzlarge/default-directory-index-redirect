'use strict';

import { Callback, CloudFrontFunctionsEvent, Context, Handler } from 'aws-lambda';

/**
 * A CloudFront event handler that redirects requests with directory references to their respective index.html files.
 * This is useful when hosting a static website on an S3 bucket with custom index.html files for each directory, as it allows
 * CloudFront to display the correct index page instead of returning an error XML.
 *
 * @param event - The incoming CloudFront event.
 * @param context - The Lambda execution context.
 * @param callback - The function callback to return the modified CloudFront request.
 */
export const handler: Handler = async (
    /* The incoming CloudFront event */
    event: CloudFrontFunctionsEvent,
    /* The Lambda execution context */
    context: Context,
    /* The function callback to return the modified CloudFront request */
    callback: Callback,
) => {
    // NOTE: Replace trailing slash with /index.html
    event.request.uri = event.request.uri.replace(/\/$/, '\/index.html')

    // NOTE: Return modified request to CloudFront
    callback(null, event.request)
}