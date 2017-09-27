/**
 * Hydra OAuth2 & OpenID Connect Server (1.0.0-aplha1)
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AcceptConsentRequestPayload', 'model/AllowedRequest', 'model/Body', 'model/ConsentRequest', 'model/ConsentRequestClient', 'model/ConsentRequestManager', 'model/Context', 'model/CreateJsonWebKeySetPayload', 'model/Firewall', 'model/Group', 'model/Handler', 'model/Headers', 'model/IDTokenClaims', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse401', 'model/JoseWebKeySetRequest', 'model/JsonWebKey', 'model/JsonWebKeySet', 'model/KeyGenerator', 'model/Manager', 'model/MembersRequest', 'model/OAuth2Client', 'model/Policy', 'model/PolicyConditions', 'model/RawMessage', 'model/RejectConsentRequestPayload', 'model/Session', 'model/SwaggerCreatePolicyParameters', 'model/SwaggerGetPolicyParameters', 'model/SwaggerJsonWebKeyQuery', 'model/SwaggerJwkCreateSet', 'model/SwaggerJwkSetQuery', 'model/SwaggerJwkUpdateSet', 'model/SwaggerJwkUpdateSetKey', 'model/SwaggerListPolicyParameters', 'model/SwaggerListPolicyResponse', 'model/SwaggerUpdatePolicyParameters', 'model/SwaggerWardenAllowedParameters', 'model/SwaggerWardenAllowedResponse', 'model/SwaggerWardenAllowedResponseBody', 'model/SwaggerWardenTokenAllowedParameters', 'model/SwaggerWardenTokenAllowedResponse', 'model/SwaggerWardenTokenAllowedResponseBody', 'model/TokenAllowedRequest', 'model/WardenTokenAllowedBody', 'model/WellKnown', 'model/Writer', 'api/ClientsApi', 'api/ConsentApi', 'api/DefaultApi', 'api/GroupsApi', 'api/HealthApi', 'api/JsonWebKeyApi', 'api/OAuth2Api', 'api/Oauth2Api', 'api/OpenidconnectApi', 'api/PoliciesApi', 'api/WardenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AcceptConsentRequestPayload'), require('./model/AllowedRequest'), require('./model/Body'), require('./model/ConsentRequest'), require('./model/ConsentRequestClient'), require('./model/ConsentRequestManager'), require('./model/Context'), require('./model/CreateJsonWebKeySetPayload'), require('./model/Firewall'), require('./model/Group'), require('./model/Handler'), require('./model/Headers'), require('./model/IDTokenClaims'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse401'), require('./model/JoseWebKeySetRequest'), require('./model/JsonWebKey'), require('./model/JsonWebKeySet'), require('./model/KeyGenerator'), require('./model/Manager'), require('./model/MembersRequest'), require('./model/OAuth2Client'), require('./model/Policy'), require('./model/PolicyConditions'), require('./model/RawMessage'), require('./model/RejectConsentRequestPayload'), require('./model/Session'), require('./model/SwaggerCreatePolicyParameters'), require('./model/SwaggerGetPolicyParameters'), require('./model/SwaggerJsonWebKeyQuery'), require('./model/SwaggerJwkCreateSet'), require('./model/SwaggerJwkSetQuery'), require('./model/SwaggerJwkUpdateSet'), require('./model/SwaggerJwkUpdateSetKey'), require('./model/SwaggerListPolicyParameters'), require('./model/SwaggerListPolicyResponse'), require('./model/SwaggerUpdatePolicyParameters'), require('./model/SwaggerWardenAllowedParameters'), require('./model/SwaggerWardenAllowedResponse'), require('./model/SwaggerWardenAllowedResponseBody'), require('./model/SwaggerWardenTokenAllowedParameters'), require('./model/SwaggerWardenTokenAllowedResponse'), require('./model/SwaggerWardenTokenAllowedResponseBody'), require('./model/TokenAllowedRequest'), require('./model/WardenTokenAllowedBody'), require('./model/WellKnown'), require('./model/Writer'), require('./api/ClientsApi'), require('./api/ConsentApi'), require('./api/DefaultApi'), require('./api/GroupsApi'), require('./api/HealthApi'), require('./api/JsonWebKeyApi'), require('./api/OAuth2Api'), require('./api/Oauth2Api'), require('./api/OpenidconnectApi'), require('./api/PoliciesApi'), require('./api/WardenApi'));
  }
}(function(ApiClient, AcceptConsentRequestPayload, AllowedRequest, Body, ConsentRequest, ConsentRequestClient, ConsentRequestManager, Context, CreateJsonWebKeySetPayload, Firewall, Group, Handler, Headers, IDTokenClaims, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse401, JoseWebKeySetRequest, JsonWebKey, JsonWebKeySet, KeyGenerator, Manager, MembersRequest, OAuth2Client, Policy, PolicyConditions, RawMessage, RejectConsentRequestPayload, Session, SwaggerCreatePolicyParameters, SwaggerGetPolicyParameters, SwaggerJsonWebKeyQuery, SwaggerJwkCreateSet, SwaggerJwkSetQuery, SwaggerJwkUpdateSet, SwaggerJwkUpdateSetKey, SwaggerListPolicyParameters, SwaggerListPolicyResponse, SwaggerUpdatePolicyParameters, SwaggerWardenAllowedParameters, SwaggerWardenAllowedResponse, SwaggerWardenAllowedResponseBody, SwaggerWardenTokenAllowedParameters, SwaggerWardenTokenAllowedResponse, SwaggerWardenTokenAllowedResponseBody, TokenAllowedRequest, WardenTokenAllowedBody, WellKnown, Writer, ClientsApi, ConsentApi, DefaultApi, GroupsApi, HealthApi, JsonWebKeyApi, OAuth2Api, Oauth2Api, OpenidconnectApi, PoliciesApi, WardenApi) {
  'use strict';

  /**
   * Please_refer_to_the_user_guide_for_in_depth_documentation_httpsory_gitbooks_iohydracontentHydra_offers_OAuth_2_0_and_OpenID_Connect_Core_1_0_capabilities_as_a_service__Hydra_is_different_because_it_works_with_any_existing_authentication_infrastructure_not_just_LDAP_or_SAML__By_implementing_a_consent_app__works_with_any_programming_language_you_build_a_bridge_between_Hydra_and_your_authentication_infrastructure_Hydra_is_able_to_securely_manage_JSON_Web_Keys_and_has_a_sophisticated_policy_based_access_control_you_can_use_if_you_want_to_Hydra_is_suitable_for_green___new_and_brownfield__existing_projects__If_you_are_not_familiar_with_OAuth_2_0_and_are_working_on_a_greenfield_project_we_recommend_evaluating_if_OAuth_2_0_really_serves_your_purpose__Knowledge_of_OAuth_2_0_is_imperative_in_understanding_what_Hydra_does_and_how_it_works_The_official_repository_is_located_at_httpsgithub_comoryhydra_ATTENTION___IMPORTANT_NOTEThe_swagger_generator_used_to_create_this_documentation_does_currently_not_support_example_responses__To_seerequest_and_response_payloads_click_on_Show_JSON_schema_Enable_JSON_Schema_on_Apiary_httpsstorage_googleapis_comory_amhydrajson_schema_png.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var HydraOAuth2OpenIdConnectServer100Aplha1 = require('index'); // See note below*.
   * var xxxSvc = new HydraOAuth2OpenIdConnectServer100Aplha1.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new HydraOAuth2OpenIdConnectServer100Aplha1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new HydraOAuth2OpenIdConnectServer100Aplha1.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new HydraOAuth2OpenIdConnectServer100Aplha1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version Latest
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AcceptConsentRequestPayload model constructor.
     * @property {module:model/AcceptConsentRequestPayload}
     */
    AcceptConsentRequestPayload: AcceptConsentRequestPayload,
    /**
     * The AllowedRequest model constructor.
     * @property {module:model/AllowedRequest}
     */
    AllowedRequest: AllowedRequest,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The ConsentRequest model constructor.
     * @property {module:model/ConsentRequest}
     */
    ConsentRequest: ConsentRequest,
    /**
     * The ConsentRequestClient model constructor.
     * @property {module:model/ConsentRequestClient}
     */
    ConsentRequestClient: ConsentRequestClient,
    /**
     * The ConsentRequestManager model constructor.
     * @property {module:model/ConsentRequestManager}
     */
    ConsentRequestManager: ConsentRequestManager,
    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context: Context,
    /**
     * The CreateJsonWebKeySetPayload model constructor.
     * @property {module:model/CreateJsonWebKeySetPayload}
     */
    CreateJsonWebKeySetPayload: CreateJsonWebKeySetPayload,
    /**
     * The Firewall model constructor.
     * @property {module:model/Firewall}
     */
    Firewall: Firewall,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The Handler model constructor.
     * @property {module:model/Handler}
     */
    Handler: Handler,
    /**
     * The Headers model constructor.
     * @property {module:model/Headers}
     */
    Headers: Headers,
    /**
     * The IDTokenClaims model constructor.
     * @property {module:model/IDTokenClaims}
     */
    IDTokenClaims: IDTokenClaims,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401: InlineResponse401,
    /**
     * The JoseWebKeySetRequest model constructor.
     * @property {module:model/JoseWebKeySetRequest}
     */
    JoseWebKeySetRequest: JoseWebKeySetRequest,
    /**
     * The JsonWebKey model constructor.
     * @property {module:model/JsonWebKey}
     */
    JsonWebKey: JsonWebKey,
    /**
     * The JsonWebKeySet model constructor.
     * @property {module:model/JsonWebKeySet}
     */
    JsonWebKeySet: JsonWebKeySet,
    /**
     * The KeyGenerator model constructor.
     * @property {module:model/KeyGenerator}
     */
    KeyGenerator: KeyGenerator,
    /**
     * The Manager model constructor.
     * @property {module:model/Manager}
     */
    Manager: Manager,
    /**
     * The MembersRequest model constructor.
     * @property {module:model/MembersRequest}
     */
    MembersRequest: MembersRequest,
    /**
     * The OAuth2Client model constructor.
     * @property {module:model/OAuth2Client}
     */
    OAuth2Client: OAuth2Client,
    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy: Policy,
    /**
     * The PolicyConditions model constructor.
     * @property {module:model/PolicyConditions}
     */
    PolicyConditions: PolicyConditions,
    /**
     * The RawMessage model constructor.
     * @property {module:model/RawMessage}
     */
    RawMessage: RawMessage,
    /**
     * The RejectConsentRequestPayload model constructor.
     * @property {module:model/RejectConsentRequestPayload}
     */
    RejectConsentRequestPayload: RejectConsentRequestPayload,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SwaggerCreatePolicyParameters model constructor.
     * @property {module:model/SwaggerCreatePolicyParameters}
     */
    SwaggerCreatePolicyParameters: SwaggerCreatePolicyParameters,
    /**
     * The SwaggerGetPolicyParameters model constructor.
     * @property {module:model/SwaggerGetPolicyParameters}
     */
    SwaggerGetPolicyParameters: SwaggerGetPolicyParameters,
    /**
     * The SwaggerJsonWebKeyQuery model constructor.
     * @property {module:model/SwaggerJsonWebKeyQuery}
     */
    SwaggerJsonWebKeyQuery: SwaggerJsonWebKeyQuery,
    /**
     * The SwaggerJwkCreateSet model constructor.
     * @property {module:model/SwaggerJwkCreateSet}
     */
    SwaggerJwkCreateSet: SwaggerJwkCreateSet,
    /**
     * The SwaggerJwkSetQuery model constructor.
     * @property {module:model/SwaggerJwkSetQuery}
     */
    SwaggerJwkSetQuery: SwaggerJwkSetQuery,
    /**
     * The SwaggerJwkUpdateSet model constructor.
     * @property {module:model/SwaggerJwkUpdateSet}
     */
    SwaggerJwkUpdateSet: SwaggerJwkUpdateSet,
    /**
     * The SwaggerJwkUpdateSetKey model constructor.
     * @property {module:model/SwaggerJwkUpdateSetKey}
     */
    SwaggerJwkUpdateSetKey: SwaggerJwkUpdateSetKey,
    /**
     * The SwaggerListPolicyParameters model constructor.
     * @property {module:model/SwaggerListPolicyParameters}
     */
    SwaggerListPolicyParameters: SwaggerListPolicyParameters,
    /**
     * The SwaggerListPolicyResponse model constructor.
     * @property {module:model/SwaggerListPolicyResponse}
     */
    SwaggerListPolicyResponse: SwaggerListPolicyResponse,
    /**
     * The SwaggerUpdatePolicyParameters model constructor.
     * @property {module:model/SwaggerUpdatePolicyParameters}
     */
    SwaggerUpdatePolicyParameters: SwaggerUpdatePolicyParameters,
    /**
     * The SwaggerWardenAllowedParameters model constructor.
     * @property {module:model/SwaggerWardenAllowedParameters}
     */
    SwaggerWardenAllowedParameters: SwaggerWardenAllowedParameters,
    /**
     * The SwaggerWardenAllowedResponse model constructor.
     * @property {module:model/SwaggerWardenAllowedResponse}
     */
    SwaggerWardenAllowedResponse: SwaggerWardenAllowedResponse,
    /**
     * The SwaggerWardenAllowedResponseBody model constructor.
     * @property {module:model/SwaggerWardenAllowedResponseBody}
     */
    SwaggerWardenAllowedResponseBody: SwaggerWardenAllowedResponseBody,
    /**
     * The SwaggerWardenTokenAllowedParameters model constructor.
     * @property {module:model/SwaggerWardenTokenAllowedParameters}
     */
    SwaggerWardenTokenAllowedParameters: SwaggerWardenTokenAllowedParameters,
    /**
     * The SwaggerWardenTokenAllowedResponse model constructor.
     * @property {module:model/SwaggerWardenTokenAllowedResponse}
     */
    SwaggerWardenTokenAllowedResponse: SwaggerWardenTokenAllowedResponse,
    /**
     * The SwaggerWardenTokenAllowedResponseBody model constructor.
     * @property {module:model/SwaggerWardenTokenAllowedResponseBody}
     */
    SwaggerWardenTokenAllowedResponseBody: SwaggerWardenTokenAllowedResponseBody,
    /**
     * The TokenAllowedRequest model constructor.
     * @property {module:model/TokenAllowedRequest}
     */
    TokenAllowedRequest: TokenAllowedRequest,
    /**
     * The WardenTokenAllowedBody model constructor.
     * @property {module:model/WardenTokenAllowedBody}
     */
    WardenTokenAllowedBody: WardenTokenAllowedBody,
    /**
     * The WellKnown model constructor.
     * @property {module:model/WellKnown}
     */
    WellKnown: WellKnown,
    /**
     * The Writer model constructor.
     * @property {module:model/Writer}
     */
    Writer: Writer,
    /**
     * The ClientsApi service constructor.
     * @property {module:api/ClientsApi}
     */
    ClientsApi: ClientsApi,
    /**
     * The ConsentApi service constructor.
     * @property {module:api/ConsentApi}
     */
    ConsentApi: ConsentApi,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The HealthApi service constructor.
     * @property {module:api/HealthApi}
     */
    HealthApi: HealthApi,
    /**
     * The JsonWebKeyApi service constructor.
     * @property {module:api/JsonWebKeyApi}
     */
    JsonWebKeyApi: JsonWebKeyApi,
    /**
     * The OAuth2Api service constructor.
     * @property {module:api/OAuth2Api}
     */
    OAuth2Api: OAuth2Api,
    /**
     * The Oauth2Api service constructor.
     * @property {module:api/Oauth2Api}
     */
    Oauth2Api: Oauth2Api,
    /**
     * The OpenidconnectApi service constructor.
     * @property {module:api/OpenidconnectApi}
     */
    OpenidconnectApi: OpenidconnectApi,
    /**
     * The PoliciesApi service constructor.
     * @property {module:api/PoliciesApi}
     */
    PoliciesApi: PoliciesApi,
    /**
     * The WardenApi service constructor.
     * @property {module:api/WardenApi}
     */
    WardenApi: WardenApi
  };

  return exports;
}));
