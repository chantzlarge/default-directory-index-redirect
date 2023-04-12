[//]: # (https://gist.github.com/0xlarge/0241e2a11a4cc49b628332b3520c08af)

# [@chantzlarge](https://github.com/chantzlarge/default-directory-index-redirect/)/[default-directory-index-redirect](https://github.com/chantzlarge/default-directory-index-redirect/)

## TL;DR

- This-is;
  - an [AWS Lambda](https://aws.amazon.com/lambda/) function
- Used-for;
  - intercepting viewer-requests to an [AWS Cloudfront](https://aws.amazon.com/cloudfront/) distribution and rewriting requests to default directory indexes
- Built-with;
  - [AWS](https://aws.amazon.com/)
  - [NodeJS](https://nodejs.org/)

## Getting Started

This-is an [AWS Lambda](https://aws.amazon.com/lambda/) function used-for intercepting viewer-requests to an [AWS Cloudfront](https://aws.amazon.com/cloudfront/) distribution and rewriting requests to default directory indexes.

### Prerequisites

- [AWS](https://aws.amazon.com/)
- [NodeJS](https://nodejs.org/)

### Installation

```shell
npm i
```

## Usage

### Compile

Compiles the TypeScript into JavaScript using [tsc](https://www.npmjs.com/package/typescript):

```shell
npm run compile
```

### Clean

Removes packages and other files matching `default-directory-index-redirect*`:

```shell
npm run clean
```

### Package

Packages application for deployment to [AWS Lambda](https://aws.amazon.com/lambda/) using `zip`:

```shell
npm run package
```

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md)

## Deployment

See [Lambda depoyment packages | AWS](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html).

## Built-with

- [AWS](https://docs.aws.amazon.com/index.html)
  - [Lambda](https://docs.aws.amazon.com/lambda)
- [NodeJS](https://nodejs.org/en/docs/)

## Author

- [Chantz Large](https://chantzlarge.com)

## Versioning

This project uses [semantic versioning](https://semver.org) and [GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) to publish new versions and manage releases.

## License

[MIT](./LICENSE)

## References

- [CloudFront Events That Can Trigger a Lambda Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudfront-trigger-events.html)
- [Lambda@Edge Event Structure](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html)
- [Lambda@Edge Example Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html)
- [Testing and Debugging Lambda@Edge Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-testing-debugging.html)
- [Using AWS Lambda with CloudFront Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)
