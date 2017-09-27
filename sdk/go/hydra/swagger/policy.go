/*
 * Hydra OAuth2 & OpenID Connect Server
 *
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type Policy struct {

	// Actions impacted by the policy.
	Actions []string `json:"actions,omitempty"`

	// Conditions under which the policy is active.
	Conditions map[string]PolicyConditions `json:"conditions,omitempty"`

	// Description of the policy.
	Description string `json:"description,omitempty"`

	// Effect of the policy
	Effect string `json:"effect,omitempty"`

	// ID of the policy.
	Id string `json:"id,omitempty"`

	// Resources impacted by the policy.
	Resources []string `json:"resources,omitempty"`

	// Subjects impacted by the policy.
	Subjects []string `json:"subjects,omitempty"`
}
