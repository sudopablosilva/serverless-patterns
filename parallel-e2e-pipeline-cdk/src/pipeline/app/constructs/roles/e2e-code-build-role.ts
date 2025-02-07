import { Construct } from "@aws-cdk/core";
import { 
  Role,
  ServicePrincipal, 
  ManagedPolicy
} from "@aws-cdk/aws-iam";


export class E2ECodeBuildRole extends Construct {
  readonly role: Role;

  public constructor(parent: Construct, id: string) {
    super(parent, id);

    this.role = new Role(this, "E2EStackRole", {
      assumedBy: new ServicePrincipal("codebuild.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess")
      ]
    });
  }
}
