// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file redpanda/api/dataplane/v1/mcp.proto (package redpanda.api.dataplane.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_google_api_resource } from "../../../../google/api/resource_pb";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_redpanda_api_auth_v1_authorization } from "../../auth/v1/authorization_pb";
import type { Pipeline_Resources } from "./pipeline_pb";
import { file_redpanda_api_dataplane_v1_pipeline } from "./pipeline_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file redpanda/api/dataplane/v1/mcp.proto.
 */
export const file_redpanda_api_dataplane_v1_mcp: GenFile = /*@__PURE__*/
  fileDesc("CiNyZWRwYW5kYS9hcGkvZGF0YXBsYW5lL3YxL21jcC5wcm90bxIZcmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MSLOCQoJTUNQU2VydmVyEioKAmlkGAEgASgJQh7gQQK6SBjIAQFyEzIRXltBLVphLXowLTktXy9dKyQSOgoMZGlzcGxheV9uYW1lGAIgASgJQiTgQQK6SB7IAQFyGRADGIABMhJeW0EtWmEtejAtOS1fIC9dKyQSHQoLZGVzY3JpcHRpb24YAyABKAlCCLpIBXIDGIACEpcBCgxjb25maWdfZmlsZXMYBCADKAsyNS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlci5Db25maWdGaWxlc0VudHJ5QkqSQTkyN1RoZSBSZWRwYW5kYSBDb25uZWN0IE1DUCBzZXJ2ZXIgY29uZmlndXJhdGlvbiBpbiBmaWxlcy7gQQK6SAjIAQGaAQIIARL8AQoJcmVzb3VyY2VzGAUgASgLMi0ucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5QaXBlbGluZS5SZXNvdXJjZXNCuQGSQbUBMrIBVGhlIHJlcXVlc3RlZCBhbW91bnQgb2YgcmVzb3VyY2VzIGZvciB0aGUgTUNQIHNlcnZlci4gRGVwZW5kaW5nIG9uIHRoZSBiYWNrZW5kLCB0aGUgcmVzb3VyY2VzIG1pZ2h0IGJlIGd1YXJhbnRlZWQsIG9yIG1pZ2h0IGJlIHR3ZWFrZWQgYmFzZWQgb24gdGhlIHV0aWxpemF0aW9uIG9mIHRoZSBNQ1Agc2VydmVyLhJrCgR0YWdzGAYgAygLMi4ucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXIuVGFnc0VudHJ5Qi26SCqaAScQECojciEyH14oW1xwe0x9XHB7Wn1ccHtOfV8uOi89K1wtQF0qKSQSPgoFc3RhdGUYByABKA4yKi5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlci5TdGF0ZUID4EEDEkAKBnN0YXR1cxgIIAEoCzIrLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTUNQU2VydmVyLlN0YXR1c0ID4EEDEhAKA3VybBgJIAEoCUID4EEDGjAKDUNvbmZpZ3VyYXRpb24SHwoIY29udGVudHMYASABKAlCDeBBArpIB8gBAXICEAEaZgoQQ29uZmlnRmlsZXNFbnRyeRILCgNrZXkYASABKAkSQQoFdmFsdWUYAiABKAsyMi5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlci5Db25maWd1cmF0aW9uOgI4ARorCglUYWdzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARoXCgZTdGF0dXMSDQoFZXJyb3IYASABKAkifQoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABISCg5TVEFURV9TVEFSVElORxABEhEKDVNUQVRFX1JVTk5JTkcQAhISCg5TVEFURV9TVE9QUElORxADEhEKDVNUQVRFX1NUT1BQRUQQBBIPCgtTVEFURV9FUlJPUhAFOkHqQT4KI3JlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEvTUNQU2VydmVyKgttY3Bfc2VydmVyczIKbWNwX3NlcnZlciKgBQoPTUNQU2VydmVyQ3JlYXRlEjoKDGRpc3BsYXlfbmFtZRgBIAEoCUIk4EECukgeyAEBchkQAxiAATISXltBLVphLXowLTktXyAvXSskEh0KC2Rlc2NyaXB0aW9uGAIgASgJQgi6SAVyAxiAAhKeAQoMY29uZmlnX2ZpbGVzGAMgAygLMjsucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXJDcmVhdGUuQ29uZmlnRmlsZXNFbnRyeUJLkkE6MjhUaGUgUmVkcGFuZGEgQ29ubmVjdCBNQ1Agc2VydmVyIGNvbmZpZ3VyYXRpb24gaW4gZmlsZXMuLuBBArpICMgBAZoBAggBEkAKCXJlc291cmNlcxgEIAEoCzItLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuUGlwZWxpbmUuUmVzb3VyY2VzEnEKBHRhZ3MYBSADKAsyNC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlckNyZWF0ZS5UYWdzRW50cnlCLbpIKpoBJxAQKiNyITIfXihbXHB7TH1ccHtafVxwe059Xy46Lz0rXC1AXSopJBpmChBDb25maWdGaWxlc0VudHJ5EgsKA2tleRgBIAEoCRJBCgV2YWx1ZRgCIAEoCzIyLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTUNQU2VydmVyLkNvbmZpZ3VyYXRpb246AjgBGisKCVRhZ3NFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBOkfqQUQKKXJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEvTUNQU2VydmVyQ3JlYXRlKgttY3Bfc2VydmVyczIKbWNwX3NlcnZlciJYChZDcmVhdGVNQ1BTZXJ2ZXJSZXF1ZXN0Ej4KCm1jcF9zZXJ2ZXIYASABKAsyKi5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlckNyZWF0ZSJTChdDcmVhdGVNQ1BTZXJ2ZXJSZXNwb25zZRI4CgptY3Bfc2VydmVyGAEgASgLMiQucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXIiQQoTR2V0TUNQU2VydmVyUmVxdWVzdBIqCgJpZBgBIAEoCUIe4EECukgYyAEBchMyEV5bQS1aYS16MC05LV8vXSskIlAKFEdldE1DUFNlcnZlclJlc3BvbnNlEjgKCm1jcF9zZXJ2ZXIYASABKAsyJC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlciLGBQoVTGlzdE1DUFNlcnZlcnNSZXF1ZXN0EkcKBmZpbHRlchgBIAEoCzI3LnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTGlzdE1DUFNlcnZlcnNSZXF1ZXN0LkZpbHRlchKeAQoJcGFnZV9zaXplGAIgASgFQooBkkF1MmFMaW1pdCB0aGUgcGFnaW5hdGVkIHJlc3BvbnNlIHRvIGEgbnVtYmVyIG9mIGl0ZW1zLiBEZWZhdWx0cyB0byAxMDAuIFVzZSAtMSB0byBkaXNhYmxlIHBhZ2luYXRpb24uWQAAAAAAAElAaQAAAAAAAPC/ukgPGg0YMij///////////8BEhIKCnBhZ2VfdG9rZW4YAyABKAkargMKBkZpbHRlchKCAQoVZGlzcGxheV9uYW1lX2NvbnRhaW5zGAEgASgJQmOSQUEyP0FueSBNQ1AgU2VydmVyIHRoYXQgcGFydGlhbGx5IG1hdGNoIHRoaXMgbmFtZSB3aWxsIGJlIHJldHVybmVkLrpIHNgBAXIXGIABMhJeW0EtWmEtejAtOS1fIC9dKyQSwQEKBHRhZ3MYAiADKAsyQS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLkxpc3RNQ1BTZXJ2ZXJzUmVxdWVzdC5GaWx0ZXIuVGFnc0VudHJ5QnCSQUAyPk1DUCBzZXJ2ZXJzIHRoYXQgbWF0Y2ggYWxsIHRoZSBwcm92aWRlZCB0YWdzIHdpbGwgYmUgcmV0dXJuZWQuukgqmgEnEBAqI3IhMh9eKFtccHtMfVxwe1p9XHB7Tn1fLjovPStcLUBdKikkEi4KCXNlY3JldF9pZBgDIAEoCUIbukgY2AEBchMyEV5bQS1aXVtBLVowLTlfXSokGisKCVRhZ3NFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBImwKFkxpc3RNQ1BTZXJ2ZXJzUmVzcG9uc2USOQoLbWNwX3NlcnZlcnMYASADKAsyJC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlchIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkijgUKD01DUFNlcnZlclVwZGF0ZRI3CgxkaXNwbGF5X25hbWUYASABKAlCIbpIHtgBAXIZEAMYgAEyEl5bQS1aYS16MC05LV8gL10rJBIdCgtkZXNjcmlwdGlvbhgCIAEoCUIIukgFcgMYgAISjwEKDGNvbmZpZ19maWxlcxgDIAMoCzI7LnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTUNQU2VydmVyVXBkYXRlLkNvbmZpZ0ZpbGVzRW50cnlCPJJBOTI3VGhlIFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlciBjb25maWd1cmF0aW9uIGluIGZpbGVzLhJACglyZXNvdXJjZXMYBCABKAsyLS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLlBpcGVsaW5lLlJlc291cmNlcxJxCgR0YWdzGAUgAygLMjQucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXJVcGRhdGUuVGFnc0VudHJ5Qi26SCqaAScQECojciEyH14oW1xwe0x9XHB7Wn1ccHtOfV8uOi89K1wtQF0qKSQaZgoQQ29uZmlnRmlsZXNFbnRyeRILCgNrZXkYASABKAkSQQoFdmFsdWUYAiABKAsyMi5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlci5Db25maWd1cmF0aW9uOgI4ARorCglUYWdzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ATpH6kFECilyZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxL01DUFNlcnZlclVwZGF0ZSoLbWNwX3NlcnZlcnMyCm1jcF9zZXJ2ZXIiwAEKFlVwZGF0ZU1DUFNlcnZlclJlcXVlc3QSKgoCaWQYASABKAlCHuBBArpIGMgBAXITMhFeW0EtWmEtejAtOS1fL10rJBJJCgptY3Bfc2VydmVyGAIgASgLMioucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXJVcGRhdGVCCeBBArpIA8gBARIvCgt1cGRhdGVfbWFzaxgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2siUwoXVXBkYXRlTUNQU2VydmVyUmVzcG9uc2USOAoKbWNwX3NlcnZlchgBIAEoCzIkLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTUNQU2VydmVyIkQKFkRlbGV0ZU1DUFNlcnZlclJlcXVlc3QSKgoCaWQYASABKAlCHuBBArpIGMgBAXITMhFeW0EtWmEtejAtOS1fL10rJCIZChdEZWxldGVNQ1BTZXJ2ZXJSZXNwb25zZSJCChRTdG9wTUNQU2VydmVyUmVxdWVzdBIqCgJpZBgBIAEoCUIe4EECukgYyAEBchMyEV5bQS1aYS16MC05LV8vXSskIlEKFVN0b3BNQ1BTZXJ2ZXJSZXNwb25zZRI4CgptY3Bfc2VydmVyGAEgASgLMiQucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXIiQwoVU3RhcnRNQ1BTZXJ2ZXJSZXF1ZXN0EioKAmlkGAEgASgJQh7gQQK6SBjIAQFyEzIRXltBLVphLXowLTktXy9dKyQiUgoWU3RhcnRNQ1BTZXJ2ZXJSZXNwb25zZRI4CgptY3Bfc2VydmVyGAEgASgLMiQucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXIiKAomR2V0TUNQU2VydmVyU2VydmljZUNvbmZpZ1NjaGVtYVJlcXVlc3QipgIKJ0dldE1DUFNlcnZlclNlcnZpY2VDb25maWdTY2hlbWFSZXNwb25zZRKyAQoTY29uZmlndXJhdGlvbl9maWxlcxgBIAMoCzJaLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuR2V0TUNQU2VydmVyU2VydmljZUNvbmZpZ1NjaGVtYVJlc3BvbnNlLkNvbmZpZ3VyYXRpb25GaWxlU2NoZW1hQjmSQS4yLFRoZSBjb25maWd1cmF0aW9uIHNjaGVtYSBmb3IgdGhlIE1DUCBTZXJ2ZXIuukgFkgECCAEaRgoXQ29uZmlndXJhdGlvbkZpbGVTY2hlbWESFAoMcGF0aF9wYXR0ZXJuGAEgASgJEhUKDWNvbmZpZ19zY2hlbWEYAiABKAkyjhgKEE1DUFNlcnZlclNlcnZpY2USwQIKD0NyZWF0ZU1DUFNlcnZlchIxLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuQ3JlYXRlTUNQU2VydmVyUmVxdWVzdBoyLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuQ3JlYXRlTUNQU2VydmVyUmVzcG9uc2UixgGSQYYBEiJDcmVhdGUgUmVkcGFuZGEgQ29ubmVjdCBNQ1AgU2VydmVyGilDcmVhdGUgYSBuZXcgUmVkcGFuZGEgQ29ubmVjdCBNQ1AgU2VydmVyLko1CgMyMDESLgoCT0sSKAomGiQucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5NQ1BTZXJ2ZXKKph0ECAIQB4LT5JMCLjoKbWNwX3NlcnZlciIgL3YxL3JlZHBhbmRhLWNvbm5lY3QvbWNwLXNlcnZlcnMS3AIKDEdldE1DUFNlcnZlchIuLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuR2V0TUNQU2VydmVyUmVxdWVzdBovLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuR2V0TUNQU2VydmVyUmVzcG9uc2Ui6gGSQbEBEh9HZXQgUmVkcGFuZGEgQ29ubmVjdCBNQ1Agc2VydmVyGitHZXQgYSBzcGVjaWZpYyBSZWRwYW5kYSBDb25uZWN0IE1DUCBzZXJ2ZXIuSjUKAzIwMBIuCgJPSxIoCiYaJC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlckoqCgM0MDQSIwoJTm90IEZvdW5kEhYKFBoSLmdvb2dsZS5ycGMuU3RhdHVziqYdBAgBEAeC0+STAicSJS92MS9yZWRwYW5kYS1jb25uZWN0L21jcC1zZXJ2ZXJzL3tpZH0S4gIKDkxpc3RNQ1BTZXJ2ZXJzEjAucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5MaXN0TUNQU2VydmVyc1JlcXVlc3QaMS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLkxpc3RNQ1BTZXJ2ZXJzUmVzcG9uc2Ui6gGSQbYBEiFMaXN0IFJlZHBhbmRhIENvbm5lY3QgTUNQIFNlcnZlcnMaTUxpc3QgUmVkcGFuZGEgQ29ubmVjdCBNQ1AgU2VydmVycy4gT3B0aW9uYWw6IGZpbHRlciBiYXNlZCBvbiBNQ1Agc2VydmVyIG5hbWUuSkIKAzIwMBI7CgJPSxI1CjMaMS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLkxpc3RNQ1BTZXJ2ZXJzUmVzcG9uc2WKph0ECAEQB4LT5JMCIhIgL3YxL3JlZHBhbmRhLWNvbm5lY3QvbWNwLXNlcnZlcnMS2QIKD1VwZGF0ZU1DUFNlcnZlchIxLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuVXBkYXRlTUNQU2VydmVyUmVxdWVzdBoyLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuVXBkYXRlTUNQU2VydmVyUmVzcG9uc2Ui3gGSQZkBEiRVcGRhdGUgYSBSZWRwYW5kYSBDb25uZWN0IE1DUCBTZXJ2ZXIaOlVwZGF0ZSB0aGUgY29uZmlndXJhdGlvbiBvZiBhIFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlci5KNQoDMjAwEi4KAk9LEigKJhokLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuTUNQU2VydmVyiqYdBAgCEAeC0+STAjM6Cm1jcF9zZXJ2ZXIaJS92MS9yZWRwYW5kYS1jb25uZWN0L21jcC1zZXJ2ZXJzL3tpZH0SwQIKD0RlbGV0ZU1DUFNlcnZlchIxLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuRGVsZXRlTUNQU2VydmVyUmVxdWVzdBoyLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuRGVsZXRlTUNQU2VydmVyUmVzcG9uc2UixgGSQY0BEiREZWxldGUgYSBSZWRwYW5kYSBDb25uZWN0IE1DUCBzZXJ2ZXIaJURlbGV0ZSBhIFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlci5KEgoDMjA0EgsKB0RlbGV0ZWQSAEoqCgM0MDQSIwoJTm90IEZvdW5kEhYKFBoSLmdvb2dsZS5ycGMuU3RhdHVziqYdBAgCEAeC0+STAicqJS92MS9yZWRwYW5kYS1jb25uZWN0L21jcC1zZXJ2ZXJzL3tpZH0S7QIKDVN0b3BNQ1BTZXJ2ZXISLy5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLlN0b3BNQ1BTZXJ2ZXJSZXF1ZXN0GjAucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5TdG9wTUNQU2VydmVyUmVzcG9uc2Ui+AGSQboBEiNTdG9wcyBhIFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlchorU3RvcCBhIHJ1bm5pbmcgUmVkcGFuZGEgQ29ubmVjdCBNQ1Agc2VydmVyLko6CgMyMDASMwoHU3RvcHBlZBIoCiYaJC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlckoqCgM0MDQSIwoJTm90IEZvdW5kEhYKFBoSLmdvb2dsZS5ycGMuU3RhdHVziqYdBAgCEAeC0+STAiwiKi92MS9yZWRwYW5kYS1jb25uZWN0L21jcC1zZXJ2ZXJzL3tpZH06c3RvcBLyAgoOU3RhcnRNQ1BTZXJ2ZXISMC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLlN0YXJ0TUNQU2VydmVyUmVxdWVzdBoxLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjEuU3RhcnRNQ1BTZXJ2ZXJSZXNwb25zZSL6AZJBuwESI1N0YXJ0IGEgUmVkcGFuZGEgQ29ubmVjdCBNQ1Agc2VydmVyGixTdGFydCBhIHN0b3BwZWQgUmVkcGFuZGEgQ29ubmVjdCBNQ1Agc2VydmVyLko6CgMyMDASMwoHU3RhcnRlZBIoCiYaJC5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLk1DUFNlcnZlckoqCgM0MDQSIwoJTm90IEZvdW5kEhYKFBoSLmdvb2dsZS5ycGMuU3RhdHVziqYdBAgCEAeC0+STAi0iKy92MS9yZWRwYW5kYS1jb25uZWN0L21jcC1zZXJ2ZXJzL3tpZH06c3RhcnQS/wMKH0dldE1DUFNlcnZlclNlcnZpY2VDb25maWdTY2hlbWESQS5yZWRwYW5kYS5hcGkuZGF0YXBsYW5lLnYxLkdldE1DUFNlcnZlclNlcnZpY2VDb25maWdTY2hlbWFSZXF1ZXN0GkIucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5HZXRNQ1BTZXJ2ZXJTZXJ2aWNlQ29uZmlnU2NoZW1hUmVzcG9uc2Ui1AKSQZACEkRSZXRyaWV2ZSB0aGUgc2NoZW1hIGZvciBSZWRwYW5kYSBDb25uZWN0IE1DUCBTZXJ2ZXJzIGNvbmZpZ3VyYXRpb25zLhpzVGhlIGNvbmZpZ3VyYXRpb24gc2NoZW1hIGluY2x1ZGVzIGF2YWlsYWJsZSBjb21wb25lbnRzIGFuZCBwcm9jZXNzb3JzIGluIHRoaXMgUmVkcGFuZGEgQ29ubmVjdCBNQ1AgU2VydmVyIGluc3RhbmNlLkpTCgMyMDASTAoCT0sSRgpEGkIucmVkcGFuZGEuYXBpLmRhdGFwbGFuZS52MS5HZXRNQ1BTZXJ2ZXJTZXJ2aWNlQ29uZmlnU2NoZW1hUmVzcG9uc2WKph0ECAEQB4LT5JMCMhIwL3YxL3JlZHBhbmRhLWNvbm5lY3QvbWNwLXNlcnZlcnM6Z2V0Q29uZmlnU2NoZW1hGmuSQWgKHFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlcnMSSENyZWF0ZSBhbmQgbWFuYWdlIFJlZHBhbmRhIENvbm5lY3QgTUNQIHNlcnZlcnMgYW5kIHRoZWlyIGNvbmZpZ3VyYXRpb25zLkKNAgodY29tLnJlZHBhbmRhLmFwaS5kYXRhcGxhbmUudjFCCE1jcFByb3RvUAFaW2dpdGh1Yi5jb20vcmVkcGFuZGEtZGF0YS9jb25zb2xlL2JhY2tlbmQvcGtnL3Byb3RvZ2VuL3JlZHBhbmRhL2FwaS9kYXRhcGxhbmUvdjE7ZGF0YXBsYW5ldjGiAgNSQUSqAhlSZWRwYW5kYS5BcGkuRGF0YXBsYW5lLlYxygIZUmVkcGFuZGFcQXBpXERhdGFwbGFuZVxWMeICJVJlZHBhbmRhXEFwaVxEYXRhcGxhbmVcVjFcR1BCTWV0YWRhdGHqAhxSZWRwYW5kYTo6QXBpOjpEYXRhcGxhbmU6OlYxYgZwcm90bzM", [file_buf_validate_validate, file_google_api_annotations, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_protoc_gen_openapiv2_options_annotations, file_redpanda_api_auth_v1_authorization, file_redpanda_api_dataplane_v1_pipeline]);

/**
 * Defines the MCP server resource.
 *
 * @generated from message redpanda.api.dataplane.v1.MCPServer
 */
export type MCPServer = Message<"redpanda.api.dataplane.v1.MCPServer"> & {
  /**
   * MCP Server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * User-friendly MCP server name.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Optional MCP server description.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * All the configuration files for the MCP server.
   * The key in the map is the path to the configuration file, this path must be relative and also valid in to layout in a filesystem,
   * when considering many paths in a full configuration (so it's not valid to have both entries for `foo/bar` and `foo/bar/baz`).
   *
   * @generated from field: map<string, redpanda.api.dataplane.v1.MCPServer.Configuration> config_files = 4;
   */
  configFiles: { [key: string]: MCPServer_Configuration };

  /**
   * The number of resources that are guaranteed to be assigned to the MCP server.
   *
   * @generated from field: redpanda.api.dataplane.v1.Pipeline.Resources resources = 5;
   */
  resources?: Pipeline_Resources;

  /**
   * Tags are key-value pairs that can be assigned to a MCP server resource.
   * They help organize MCP servers and enable filtering when listing them.
   *
   * @generated from field: map<string, string> tags = 6;
   */
  tags: { [key: string]: string };

  /**
   * The current MCP server state.
   *
   * @generated from field: redpanda.api.dataplane.v1.MCPServer.State state = 7;
   */
  state: MCPServer_State;

  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer.Status status = 8;
   */
  status?: MCPServer_Status;

  /**
   * URL to connect to the MCP server
   *
   * @generated from field: string url = 9;
   */
  url: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.MCPServer.
 * Use `create(MCPServerSchema)` to create a new message.
 */
export const MCPServerSchema: GenMessage<MCPServer> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 0);

/**
 * A configuration file for the MCP server.
 *
 * @generated from message redpanda.api.dataplane.v1.MCPServer.Configuration
 */
export type MCPServer_Configuration = Message<"redpanda.api.dataplane.v1.MCPServer.Configuration"> & {
  /**
   * The contents of the configuration file in YAML format.
   *
   * @generated from field: string contents = 1;
   */
  contents: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.MCPServer.Configuration.
 * Use `create(MCPServer_ConfigurationSchema)` to create a new message.
 */
export const MCPServer_ConfigurationSchema: GenMessage<MCPServer_Configuration> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 0, 0);

/**
 * MCP server status may contain an error message.
 *
 * @generated from message redpanda.api.dataplane.v1.MCPServer.Status
 */
export type MCPServer_Status = Message<"redpanda.api.dataplane.v1.MCPServer.Status"> & {
  /**
   * @generated from field: string error = 1;
   */
  error: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.MCPServer.Status.
 * Use `create(MCPServer_StatusSchema)` to create a new message.
 */
export const MCPServer_StatusSchema: GenMessage<MCPServer_Status> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 0, 1);

/**
 * State of the MCP server.
 *
 * @generated from enum redpanda.api.dataplane.v1.MCPServer.State
 */
export enum MCPServer_State {
  /**
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The MCP server is starting.
   *
   * @generated from enum value: STATE_STARTING = 1;
   */
  STARTING = 1,

  /**
   * The MCP server is running.
   *
   * @generated from enum value: STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * The MCP server is in the process of stopping.
   *
   * @generated from enum value: STATE_STOPPING = 3;
   */
  STOPPING = 3,

  /**
   * The MCP server is stopped and in paused state.
   *
   * @generated from enum value: STATE_STOPPED = 4;
   */
  STOPPED = 4,

  /**
   * The MCP server encountered an error.
   *
   * @generated from enum value: STATE_ERROR = 5;
   */
  ERROR = 5,
}

/**
 * Describes the enum redpanda.api.dataplane.v1.MCPServer.State.
 */
export const MCPServer_StateSchema: GenEnum<MCPServer_State> = /*@__PURE__*/
  enumDesc(file_redpanda_api_dataplane_v1_mcp, 0, 0);

/**
 * MCPServerCreate contains the details for the MCP Server creation request.
 *
 * @generated from message redpanda.api.dataplane.v1.MCPServerCreate
 */
export type MCPServerCreate = Message<"redpanda.api.dataplane.v1.MCPServerCreate"> & {
  /**
   * User-friendly MCP server name.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * MCP server description.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * All the configuration files for the MCP server.
   * The key in the map is the path to the configuration file, this path must be relative and also valid in to layout in a filesystem,
   * when considering many paths in a full configuration (so it's not valid to have both entries for `foo/bar` and `foo/bar/baz`).
   *
   * @generated from field: map<string, redpanda.api.dataplane.v1.MCPServer.Configuration> config_files = 3;
   */
  configFiles: { [key: string]: MCPServer_Configuration };

  /**
   * The number of resources that are guaranteed to be assigned to the MCP server.
   *
   * @generated from field: redpanda.api.dataplane.v1.Pipeline.Resources resources = 4;
   */
  resources?: Pipeline_Resources;

  /**
   * Optional list of tags to attach to a MCP server.
   *
   * @generated from field: map<string, string> tags = 5;
   */
  tags: { [key: string]: string };
};

/**
 * Describes the message redpanda.api.dataplane.v1.MCPServerCreate.
 * Use `create(MCPServerCreateSchema)` to create a new message.
 */
export const MCPServerCreateSchema: GenMessage<MCPServerCreate> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 1);

/**
 * CreateMCPServerRequest is the request of CreateMCPServer.
 *
 * @generated from message redpanda.api.dataplane.v1.CreateMCPServerRequest
 */
export type CreateMCPServerRequest = Message<"redpanda.api.dataplane.v1.CreateMCPServerRequest"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServerCreate mcp_server = 1;
   */
  mcpServer?: MCPServerCreate;
};

/**
 * Describes the message redpanda.api.dataplane.v1.CreateMCPServerRequest.
 * Use `create(CreateMCPServerRequestSchema)` to create a new message.
 */
export const CreateMCPServerRequestSchema: GenMessage<CreateMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 2);

/**
 * @generated from message redpanda.api.dataplane.v1.CreateMCPServerResponse
 */
export type CreateMCPServerResponse = Message<"redpanda.api.dataplane.v1.CreateMCPServerResponse"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer mcp_server = 1;
   */
  mcpServer?: MCPServer;
};

/**
 * Describes the message redpanda.api.dataplane.v1.CreateMCPServerResponse.
 * Use `create(CreateMCPServerResponseSchema)` to create a new message.
 */
export const CreateMCPServerResponseSchema: GenMessage<CreateMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 3);

/**
 * @generated from message redpanda.api.dataplane.v1.GetMCPServerRequest
 */
export type GetMCPServerRequest = Message<"redpanda.api.dataplane.v1.GetMCPServerRequest"> & {
  /**
   * MCP server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.GetMCPServerRequest.
 * Use `create(GetMCPServerRequestSchema)` to create a new message.
 */
export const GetMCPServerRequestSchema: GenMessage<GetMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 4);

/**
 * @generated from message redpanda.api.dataplane.v1.GetMCPServerResponse
 */
export type GetMCPServerResponse = Message<"redpanda.api.dataplane.v1.GetMCPServerResponse"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer mcp_server = 1;
   */
  mcpServer?: MCPServer;
};

/**
 * Describes the message redpanda.api.dataplane.v1.GetMCPServerResponse.
 * Use `create(GetMCPServerResponseSchema)` to create a new message.
 */
export const GetMCPServerResponseSchema: GenMessage<GetMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 5);

/**
 * @generated from message redpanda.api.dataplane.v1.ListMCPServersRequest
 */
export type ListMCPServersRequest = Message<"redpanda.api.dataplane.v1.ListMCPServersRequest"> & {
  /**
   * List filter.
   *
   * @generated from field: redpanda.api.dataplane.v1.ListMCPServersRequest.Filter filter = 1;
   */
  filter?: ListMCPServersRequest_Filter;

  /**
   * Limit the paginated response to a number of items.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Value of the next_page_token field returned by the previous response.
   * If not provided, the system assumes the first page is requested.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.ListMCPServersRequest.
 * Use `create(ListMCPServersRequestSchema)` to create a new message.
 */
export const ListMCPServersRequestSchema: GenMessage<ListMCPServersRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 6);

/**
 * @generated from message redpanda.api.dataplane.v1.ListMCPServersRequest.Filter
 */
export type ListMCPServersRequest_Filter = Message<"redpanda.api.dataplane.v1.ListMCPServersRequest.Filter"> & {
  /**
   * Substring match on MCP server name. Case-sensitive.
   *
   * @generated from field: string display_name_contains = 1;
   */
  displayNameContains: string;

  /**
   * Match MCP servers that contain all of these key/value pairs.
   *
   * @generated from field: map<string, string> tags = 2;
   */
  tags: { [key: string]: string };

  /**
   * Match MCP servers that use this secret ID.
   *
   * @generated from field: string secret_id = 3;
   */
  secretId: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.ListMCPServersRequest.Filter.
 * Use `create(ListMCPServersRequest_FilterSchema)` to create a new message.
 */
export const ListMCPServersRequest_FilterSchema: GenMessage<ListMCPServersRequest_Filter> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 6, 0);

/**
 * @generated from message redpanda.api.dataplane.v1.ListMCPServersResponse
 */
export type ListMCPServersResponse = Message<"redpanda.api.dataplane.v1.ListMCPServersResponse"> & {
  /**
   * @generated from field: repeated redpanda.api.dataplane.v1.MCPServer mcp_servers = 1;
   */
  mcpServers: MCPServer[];

  /**
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.ListMCPServersResponse.
 * Use `create(ListMCPServersResponseSchema)` to create a new message.
 */
export const ListMCPServersResponseSchema: GenMessage<ListMCPServersResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 7);

/**
 * @generated from message redpanda.api.dataplane.v1.MCPServerUpdate
 */
export type MCPServerUpdate = Message<"redpanda.api.dataplane.v1.MCPServerUpdate"> & {
  /**
   * User-friendly MCP servers name.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * MCP server description.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * All the configuration files for the MCP server.
   *
   * @generated from field: map<string, redpanda.api.dataplane.v1.MCPServer.Configuration> config_files = 3;
   */
  configFiles: { [key: string]: MCPServer_Configuration };

  /**
   * The number of resources that are guaranteed to be assigned to the MCP server.
   *
   * @generated from field: redpanda.api.dataplane.v1.Pipeline.Resources resources = 4;
   */
  resources?: Pipeline_Resources;

  /**
   * A map of tags to add, update or delete.
   * If a tag's value is empty, the server interprets that as a deletion.
   *
   * @generated from field: map<string, string> tags = 5;
   */
  tags: { [key: string]: string };
};

/**
 * Describes the message redpanda.api.dataplane.v1.MCPServerUpdate.
 * Use `create(MCPServerUpdateSchema)` to create a new message.
 */
export const MCPServerUpdateSchema: GenMessage<MCPServerUpdate> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 8);

/**
 * @generated from message redpanda.api.dataplane.v1.UpdateMCPServerRequest
 */
export type UpdateMCPServerRequest = Message<"redpanda.api.dataplane.v1.UpdateMCPServerRequest"> & {
  /**
   * MCP Server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServerUpdate mcp_server = 2;
   */
  mcpServer?: MCPServerUpdate;

  /**
   * Specifies which fields should be updated. If not provided,
   * all fields will be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message redpanda.api.dataplane.v1.UpdateMCPServerRequest.
 * Use `create(UpdateMCPServerRequestSchema)` to create a new message.
 */
export const UpdateMCPServerRequestSchema: GenMessage<UpdateMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 9);

/**
 * @generated from message redpanda.api.dataplane.v1.UpdateMCPServerResponse
 */
export type UpdateMCPServerResponse = Message<"redpanda.api.dataplane.v1.UpdateMCPServerResponse"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer mcp_server = 1;
   */
  mcpServer?: MCPServer;
};

/**
 * Describes the message redpanda.api.dataplane.v1.UpdateMCPServerResponse.
 * Use `create(UpdateMCPServerResponseSchema)` to create a new message.
 */
export const UpdateMCPServerResponseSchema: GenMessage<UpdateMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 10);

/**
 * @generated from message redpanda.api.dataplane.v1.DeleteMCPServerRequest
 */
export type DeleteMCPServerRequest = Message<"redpanda.api.dataplane.v1.DeleteMCPServerRequest"> & {
  /**
   * MCP Server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.DeleteMCPServerRequest.
 * Use `create(DeleteMCPServerRequestSchema)` to create a new message.
 */
export const DeleteMCPServerRequestSchema: GenMessage<DeleteMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 11);

/**
 * @generated from message redpanda.api.dataplane.v1.DeleteMCPServerResponse
 */
export type DeleteMCPServerResponse = Message<"redpanda.api.dataplane.v1.DeleteMCPServerResponse"> & {
};

/**
 * Describes the message redpanda.api.dataplane.v1.DeleteMCPServerResponse.
 * Use `create(DeleteMCPServerResponseSchema)` to create a new message.
 */
export const DeleteMCPServerResponseSchema: GenMessage<DeleteMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 12);

/**
 * @generated from message redpanda.api.dataplane.v1.StopMCPServerRequest
 */
export type StopMCPServerRequest = Message<"redpanda.api.dataplane.v1.StopMCPServerRequest"> & {
  /**
   * MCP Server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.StopMCPServerRequest.
 * Use `create(StopMCPServerRequestSchema)` to create a new message.
 */
export const StopMCPServerRequestSchema: GenMessage<StopMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 13);

/**
 * @generated from message redpanda.api.dataplane.v1.StopMCPServerResponse
 */
export type StopMCPServerResponse = Message<"redpanda.api.dataplane.v1.StopMCPServerResponse"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer mcp_server = 1;
   */
  mcpServer?: MCPServer;
};

/**
 * Describes the message redpanda.api.dataplane.v1.StopMCPServerResponse.
 * Use `create(StopMCPServerResponseSchema)` to create a new message.
 */
export const StopMCPServerResponseSchema: GenMessage<StopMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 14);

/**
 * @generated from message redpanda.api.dataplane.v1.StartMCPServerRequest
 */
export type StartMCPServerRequest = Message<"redpanda.api.dataplane.v1.StartMCPServerRequest"> & {
  /**
   * MCP Server ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.StartMCPServerRequest.
 * Use `create(StartMCPServerRequestSchema)` to create a new message.
 */
export const StartMCPServerRequestSchema: GenMessage<StartMCPServerRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 15);

/**
 * @generated from message redpanda.api.dataplane.v1.StartMCPServerResponse
 */
export type StartMCPServerResponse = Message<"redpanda.api.dataplane.v1.StartMCPServerResponse"> & {
  /**
   * @generated from field: redpanda.api.dataplane.v1.MCPServer mcp_server = 1;
   */
  mcpServer?: MCPServer;
};

/**
 * Describes the message redpanda.api.dataplane.v1.StartMCPServerResponse.
 * Use `create(StartMCPServerResponseSchema)` to create a new message.
 */
export const StartMCPServerResponseSchema: GenMessage<StartMCPServerResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 16);

/**
 * @generated from message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaRequest
 */
export type GetMCPServerServiceConfigSchemaRequest = Message<"redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaRequest"> & {
};

/**
 * Describes the message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaRequest.
 * Use `create(GetMCPServerServiceConfigSchemaRequestSchema)` to create a new message.
 */
export const GetMCPServerServiceConfigSchemaRequestSchema: GenMessage<GetMCPServerServiceConfigSchemaRequest> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 17);

/**
 * @generated from message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse
 */
export type GetMCPServerServiceConfigSchemaResponse = Message<"redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse"> & {
  /**
   * @generated from field: repeated redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse.ConfigurationFileSchema configuration_files = 1;
   */
  configurationFiles: GetMCPServerServiceConfigSchemaResponse_ConfigurationFileSchema[];
};

/**
 * Describes the message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse.
 * Use `create(GetMCPServerServiceConfigSchemaResponseSchema)` to create a new message.
 */
export const GetMCPServerServiceConfigSchemaResponseSchema: GenMessage<GetMCPServerServiceConfigSchemaResponse> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 18);

/**
 * @generated from message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse.ConfigurationFileSchema
 */
export type GetMCPServerServiceConfigSchemaResponse_ConfigurationFileSchema = Message<"redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse.ConfigurationFileSchema"> & {
  /**
   * The glob pattern that matches the configuration file paths.
   *
   * Example: "o11y/*.yaml" or "processors/*.yaml"
   *
   * Single and double asterisks are supported.
   *
   * @generated from field: string path_pattern = 1;
   */
  pathPattern: string;

  /**
   * JSON schema of the configuration components that are allowed for MCP Servers.
   *
   * @generated from field: string config_schema = 2;
   */
  configSchema: string;
};

/**
 * Describes the message redpanda.api.dataplane.v1.GetMCPServerServiceConfigSchemaResponse.ConfigurationFileSchema.
 * Use `create(GetMCPServerServiceConfigSchemaResponse_ConfigurationFileSchemaSchema)` to create a new message.
 */
export const GetMCPServerServiceConfigSchemaResponse_ConfigurationFileSchemaSchema: GenMessage<GetMCPServerServiceConfigSchemaResponse_ConfigurationFileSchema> = /*@__PURE__*/
  messageDesc(file_redpanda_api_dataplane_v1_mcp, 18, 0);

/**
 * MCPServer is the service for Redpanda Connect MCP Servers.
 * It exposes the API for creating and managing Redpanda Connect MCP servers and their configurations.
 *
 * @generated from service redpanda.api.dataplane.v1.MCPServerService
 */
export const MCPServerService: GenService<{
  /**
   * CreateMCPServer creates a Redpanda Connect MCP Server in the Redpanda cluster.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.CreateMCPServer
   */
  createMCPServer: {
    methodKind: "unary";
    input: typeof CreateMCPServerRequestSchema;
    output: typeof CreateMCPServerResponseSchema;
  },
  /**
   * GetMCPServer gets a specific Redpanda Connect MCP Server.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.GetMCPServer
   */
  getMCPServer: {
    methodKind: "unary";
    input: typeof GetMCPServerRequestSchema;
    output: typeof GetMCPServerResponseSchema;
  },
  /**
   * ListMCPServers implements the list mcp_servers method which lists the MCP servers
   * in the Redpanda cluster.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.ListMCPServers
   */
  listMCPServers: {
    methodKind: "unary";
    input: typeof ListMCPServersRequestSchema;
    output: typeof ListMCPServersResponseSchema;
  },
  /**
   * Update MCPServer updates a specific Redpanda Connect MCP server configuration.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.UpdateMCPServer
   */
  updateMCPServer: {
    methodKind: "unary";
    input: typeof UpdateMCPServerRequestSchema;
    output: typeof UpdateMCPServerResponseSchema;
  },
  /**
   * DeleteMCPServer deletes a specific Redpanda Connect MCP server.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.DeleteMCPServer
   */
  deleteMCPServer: {
    methodKind: "unary";
    input: typeof DeleteMCPServerRequestSchema;
    output: typeof DeleteMCPServerResponseSchema;
  },
  /**
   * StopMCPServer stops a specific Redpanda Connect MCP server.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.StopMCPServer
   */
  stopMCPServer: {
    methodKind: "unary";
    input: typeof StopMCPServerRequestSchema;
    output: typeof StopMCPServerResponseSchema;
  },
  /**
   * StartMCPServer starts a specific Redpanda Connect MCP server that has been previously stopped.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.StartMCPServer
   */
  startMCPServer: {
    methodKind: "unary";
    input: typeof StartMCPServerRequestSchema;
    output: typeof StartMCPServerResponseSchema;
  },
  /**
   * The configuration schema includes available components and processors in this Redpanda Connect MCP Server instance.
   *
   * @generated from rpc redpanda.api.dataplane.v1.MCPServerService.GetMCPServerServiceConfigSchema
   */
  getMCPServerServiceConfigSchema: {
    methodKind: "unary";
    input: typeof GetMCPServerServiceConfigSchemaRequestSchema;
    output: typeof GetMCPServerServiceConfigSchemaResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_redpanda_api_dataplane_v1_mcp, 0);

