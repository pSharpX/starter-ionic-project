import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
const awsmobileMandatorySignIn =
  awsmobile.aws_mandatory_sign_in === 'enable' ? true : false;

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID,
    identityPoolId: awsmobile.aws_cognito_identity_pool_id,
    // REQUIRED - Amazon Cognito Region
    region: awsmobile.aws_cognito_region,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: awsmobile.aws_user_pools_id,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: awsmobile.aws_user_pools_web_client_id,
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: awsmobileMandatorySignIn
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
