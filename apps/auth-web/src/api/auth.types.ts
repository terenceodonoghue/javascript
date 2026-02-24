export interface PublicKeyCredentialDescriptor {
  id: string;
  type: 'public-key';
  transports?: AuthenticatorTransport[];
}

export interface PublicKeyCredentialRequestOptions {
  publicKey: {
    challenge: string;
    timeout?: number;
    rpId?: string;
    allowCredentials?: PublicKeyCredentialDescriptor[];
    userVerification?: UserVerificationRequirement;
  };
}

export interface PublicKeyCredentialCreationOptions {
  publicKey: {
    challenge: string;
    rp: { name: string; id?: string };
    user: { id: string; name: string; displayName: string };
    pubKeyCredParams: Array<{ type: 'public-key'; alg: number }>;
    timeout?: number;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    attestation?: AttestationConveyancePreference;
  };
}

export interface AuthenticationResponse {
  id: string;
  rawId: string;
  type: string;
  response: {
    authenticatorData: string;
    clientDataJSON: string;
    signature: string;
    userHandle: string | null;
  };
}

export interface RegistrationResponse {
  id: string;
  rawId: string;
  type: string;
  response: {
    attestationObject: string;
    clientDataJSON: string;
    transports?: string[];
  };
}
