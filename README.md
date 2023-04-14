# default-directory-index-redirect

This function is designed to redirect AWS CloudFront requests to S3 buckets with directory references. A default directory index redirect lambda function that can be used to redirect AWS Cloudfront requests to S3 buckets with directory references.

## Overview

- This is an AWS Lambda function.
- It intercepts viewer requests to an AWS CloudFront distribution and rewrites requests to default directory indexes.
- Built with AWS, NodeJS, and TypeScript.

## Getting Started

This-is an [AWS Lambda](https://aws.amazon.com/lambda/) function used-for intercepting viewer-requests to an [AWS Cloudfront](https://aws.amazon.com/cloudfront/) distribution and rewriting requests to default directory indexes.

### Prerequisites

Before you begin, ensure you have the following:

- [AWS](https://aws.amazon.com/)
- [NodeJS](https://nodejs.org/)

### Installation

To install the necessary dependencies, run:

```shell
npm i
```

## Usage

### Build

To compile the TypeScript into JavaScript using [tsc](https://www.npmjs.com/package/typescript) and write the output to the `dist/` directory, run:

```shell
npm run build
```

### Clean

To remove packages and other files matching `default-directory-index-redirect*` or `dist*`, run:

```shell
npm run clean
```

### Package

To package the application for deployment to AWS Lambda using [npm-pack-zip](https://www.npmjs.com/package/npm-pack-zip), run:

```shell
npm run pack
```

### Test

To test the application using [jest](https://jestjs.io), run:

```shell
npm run test
```

## Contributing

You are encouraged to suggest enhancements, report bugs, or vulnerabilities by creating an issue or opening a pull request. For more information, see [CONTRIBUTING](./CONTRIBUTING.md).

## Deployment

For information on deploying to AWS Lambda, see the AWS Lambda deployment packages documentation.

## Built-with

- [AWS Lambda](https://docs.aws.amazon.com/lambda)
- [Babel](https://babeljs.io)
- [Jest](https://jestjs.io)
- [NodeJS](https://nodejs.org)
- [TypeScript](https://typescriptlang.org/)

## Author

- [Chantz Large](https://chantzlarge.com)

## Versioning

This project uses [semantic versioning](https://semver.org) and [GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) to publish new versions and manage releases.

## License

This project is licensed under the [MIT License](./LICENSE)

## References

- [CloudFront Events That Can Trigger a Lambda Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudfront-trigger-events.html)
- [Lambda@Edge Event Structure](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html)
- [Lambda@Edge Example Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html)
- [Testing and Debugging Lambda@Edge Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-testing-debugging.html)
- [Using AWS Lambda with CloudFront Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)
