import { environment } from './environments/environment';

export default {
    aws_mandatory_sign_in: 'enable',
    aws_cognito_identity_pool_id: environment.appAwsCognitoIdentityPoolId,
    aws_cognito_region: environment.appAwsCognitoRegion,
    aws_user_pools_id: environment.appAwsCognitoUserPoolId,
    aws_user_pools_web_client_id: environment.appAwsCognitoAppClientId,
};
