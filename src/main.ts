import gql from "graphql-tag";

const myMutation = gql`
  mutation something(
    $var1: String!
    $var2: String!
    $var3: String!
    $var4: String!
    $var5: String!
    $var6: String!
    $var7: Boolean
  ) {
    track(
      events: [
        {
          var1: $var1
          var2: $var2
          var3: $var3
          var4: $var4
          var5: $var5
          var6: $var6
          var7: $var7
        }
      ]
    )
  }
`;

export default function foo(bool: boolean) {
  const url = bool ? "https://example.com/foo" : "https://example.com/bar";
  return url;
}
