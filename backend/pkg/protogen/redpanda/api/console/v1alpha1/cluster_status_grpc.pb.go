// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: redpanda/api/console/v1alpha1/cluster_status.proto

package consolev1alpha1

import (
	context "context"

	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	ClusterStatusService_GetKafkaInfo_FullMethodName                       = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetKafkaInfo"
	ClusterStatusService_GetKafkaAuthorizerInfo_FullMethodName             = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetKafkaAuthorizerInfo"
	ClusterStatusService_GetRedpandaInfo_FullMethodName                    = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetRedpandaInfo"
	ClusterStatusService_GetRedpandaPartitionBalancerStatus_FullMethodName = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetRedpandaPartitionBalancerStatus"
	ClusterStatusService_GetConsoleInfo_FullMethodName                     = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetConsoleInfo"
	ClusterStatusService_GetKafkaConnectInfo_FullMethodName                = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetKafkaConnectInfo"
	ClusterStatusService_GetSchemaRegistryInfo_FullMethodName              = "/redpanda.api.console.v1alpha1.ClusterStatusService/GetSchemaRegistryInfo"
)

// ClusterStatusServiceClient is the client API for ClusterStatusService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// ClusterStatusService provides atomic endpoints to retrieve status
// information for each cluster component. Each RPC returns a complete
// resource or a proper gRPC error if the underlying check failed.
type ClusterStatusServiceClient interface {
	// GetKafkaInfo returns general Kafka cluster information that can be
	// retrieved via the Kafka API.
	GetKafkaInfo(ctx context.Context, in *GetKafkaInfoRequest, opts ...grpc.CallOption) (*GetKafkaInfoResponse, error)
	// GetKafkaAuthorizerInfo returns information about Kafka's authorizer.
	// If the authorizer cannot be queried (for example due to permission errors),
	// this RPC should return a gRPC error.
	GetKafkaAuthorizerInfo(ctx context.Context, in *GetKafkaAuthorizerInfoRequest, opts ...grpc.CallOption) (*GetKafkaAuthorizerInfoResponse, error)
	// GetRedpandaInfo returns information from the Redpanda admin API.
	GetRedpandaInfo(ctx context.Context, in *GetRedpandaInfoRequest, opts ...grpc.CallOption) (*GetRedpandaInfoResponse, error)
	GetRedpandaPartitionBalancerStatus(ctx context.Context, in *GetRedpandaPartitionBalancerStatusRequest, opts ...grpc.CallOption) (*GetRedpandaPartitionBalancerStatusResponse, error)
	// GetConsoleInfo returns version and build information about the Console.
	GetConsoleInfo(ctx context.Context, in *GetConsoleInfoRequest, opts ...grpc.CallOption) (*GetConsoleInfoResponse, error)
	// GetKafkaConnectInfo returns information about the configured Kafka Connect clusters.
	GetKafkaConnectInfo(ctx context.Context, in *GetKafkaConnectInfoRequest, opts ...grpc.CallOption) (*GetKafkaConnectInfoResponse, error)
	// GetSchemaRegistryInfo returns information about the Schema Registry.
	GetSchemaRegistryInfo(ctx context.Context, in *GetSchemaRegistryInfoRequest, opts ...grpc.CallOption) (*GetSchemaRegistryInfoResponse, error)
}

type clusterStatusServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewClusterStatusServiceClient(cc grpc.ClientConnInterface) ClusterStatusServiceClient {
	return &clusterStatusServiceClient{cc}
}

func (c *clusterStatusServiceClient) GetKafkaInfo(ctx context.Context, in *GetKafkaInfoRequest, opts ...grpc.CallOption) (*GetKafkaInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetKafkaInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetKafkaInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetKafkaAuthorizerInfo(ctx context.Context, in *GetKafkaAuthorizerInfoRequest, opts ...grpc.CallOption) (*GetKafkaAuthorizerInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetKafkaAuthorizerInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetKafkaAuthorizerInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetRedpandaInfo(ctx context.Context, in *GetRedpandaInfoRequest, opts ...grpc.CallOption) (*GetRedpandaInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetRedpandaInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetRedpandaInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetRedpandaPartitionBalancerStatus(ctx context.Context, in *GetRedpandaPartitionBalancerStatusRequest, opts ...grpc.CallOption) (*GetRedpandaPartitionBalancerStatusResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetRedpandaPartitionBalancerStatusResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetRedpandaPartitionBalancerStatus_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetConsoleInfo(ctx context.Context, in *GetConsoleInfoRequest, opts ...grpc.CallOption) (*GetConsoleInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetConsoleInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetConsoleInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetKafkaConnectInfo(ctx context.Context, in *GetKafkaConnectInfoRequest, opts ...grpc.CallOption) (*GetKafkaConnectInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetKafkaConnectInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetKafkaConnectInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterStatusServiceClient) GetSchemaRegistryInfo(ctx context.Context, in *GetSchemaRegistryInfoRequest, opts ...grpc.CallOption) (*GetSchemaRegistryInfoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetSchemaRegistryInfoResponse)
	err := c.cc.Invoke(ctx, ClusterStatusService_GetSchemaRegistryInfo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ClusterStatusServiceServer is the server API for ClusterStatusService service.
// All implementations must embed UnimplementedClusterStatusServiceServer
// for forward compatibility.
//
// ClusterStatusService provides atomic endpoints to retrieve status
// information for each cluster component. Each RPC returns a complete
// resource or a proper gRPC error if the underlying check failed.
type ClusterStatusServiceServer interface {
	// GetKafkaInfo returns general Kafka cluster information that can be
	// retrieved via the Kafka API.
	GetKafkaInfo(context.Context, *GetKafkaInfoRequest) (*GetKafkaInfoResponse, error)
	// GetKafkaAuthorizerInfo returns information about Kafka's authorizer.
	// If the authorizer cannot be queried (for example due to permission errors),
	// this RPC should return a gRPC error.
	GetKafkaAuthorizerInfo(context.Context, *GetKafkaAuthorizerInfoRequest) (*GetKafkaAuthorizerInfoResponse, error)
	// GetRedpandaInfo returns information from the Redpanda admin API.
	GetRedpandaInfo(context.Context, *GetRedpandaInfoRequest) (*GetRedpandaInfoResponse, error)
	GetRedpandaPartitionBalancerStatus(context.Context, *GetRedpandaPartitionBalancerStatusRequest) (*GetRedpandaPartitionBalancerStatusResponse, error)
	// GetConsoleInfo returns version and build information about the Console.
	GetConsoleInfo(context.Context, *GetConsoleInfoRequest) (*GetConsoleInfoResponse, error)
	// GetKafkaConnectInfo returns information about the configured Kafka Connect clusters.
	GetKafkaConnectInfo(context.Context, *GetKafkaConnectInfoRequest) (*GetKafkaConnectInfoResponse, error)
	// GetSchemaRegistryInfo returns information about the Schema Registry.
	GetSchemaRegistryInfo(context.Context, *GetSchemaRegistryInfoRequest) (*GetSchemaRegistryInfoResponse, error)
	mustEmbedUnimplementedClusterStatusServiceServer()
}

// UnimplementedClusterStatusServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedClusterStatusServiceServer struct{}

func (UnimplementedClusterStatusServiceServer) GetKafkaInfo(context.Context, *GetKafkaInfoRequest) (*GetKafkaInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKafkaInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetKafkaAuthorizerInfo(context.Context, *GetKafkaAuthorizerInfoRequest) (*GetKafkaAuthorizerInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKafkaAuthorizerInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetRedpandaInfo(context.Context, *GetRedpandaInfoRequest) (*GetRedpandaInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRedpandaInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetRedpandaPartitionBalancerStatus(context.Context, *GetRedpandaPartitionBalancerStatusRequest) (*GetRedpandaPartitionBalancerStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRedpandaPartitionBalancerStatus not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetConsoleInfo(context.Context, *GetConsoleInfoRequest) (*GetConsoleInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetConsoleInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetKafkaConnectInfo(context.Context, *GetKafkaConnectInfoRequest) (*GetKafkaConnectInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKafkaConnectInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) GetSchemaRegistryInfo(context.Context, *GetSchemaRegistryInfoRequest) (*GetSchemaRegistryInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSchemaRegistryInfo not implemented")
}
func (UnimplementedClusterStatusServiceServer) mustEmbedUnimplementedClusterStatusServiceServer() {}
func (UnimplementedClusterStatusServiceServer) testEmbeddedByValue()                              {}

// UnsafeClusterStatusServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ClusterStatusServiceServer will
// result in compilation errors.
type UnsafeClusterStatusServiceServer interface {
	mustEmbedUnimplementedClusterStatusServiceServer()
}

func RegisterClusterStatusServiceServer(s grpc.ServiceRegistrar, srv ClusterStatusServiceServer) {
	// If the following call pancis, it indicates UnimplementedClusterStatusServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&ClusterStatusService_ServiceDesc, srv)
}

func _ClusterStatusService_GetKafkaInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetKafkaInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetKafkaInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetKafkaInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetKafkaInfo(ctx, req.(*GetKafkaInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetKafkaAuthorizerInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetKafkaAuthorizerInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetKafkaAuthorizerInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetKafkaAuthorizerInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetKafkaAuthorizerInfo(ctx, req.(*GetKafkaAuthorizerInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetRedpandaInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRedpandaInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetRedpandaInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetRedpandaInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetRedpandaInfo(ctx, req.(*GetRedpandaInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetRedpandaPartitionBalancerStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRedpandaPartitionBalancerStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetRedpandaPartitionBalancerStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetRedpandaPartitionBalancerStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetRedpandaPartitionBalancerStatus(ctx, req.(*GetRedpandaPartitionBalancerStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetConsoleInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetConsoleInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetConsoleInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetConsoleInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetConsoleInfo(ctx, req.(*GetConsoleInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetKafkaConnectInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetKafkaConnectInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetKafkaConnectInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetKafkaConnectInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetKafkaConnectInfo(ctx, req.(*GetKafkaConnectInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterStatusService_GetSchemaRegistryInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSchemaRegistryInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterStatusServiceServer).GetSchemaRegistryInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ClusterStatusService_GetSchemaRegistryInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterStatusServiceServer).GetSchemaRegistryInfo(ctx, req.(*GetSchemaRegistryInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ClusterStatusService_ServiceDesc is the grpc.ServiceDesc for ClusterStatusService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ClusterStatusService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "redpanda.api.console.v1alpha1.ClusterStatusService",
	HandlerType: (*ClusterStatusServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetKafkaInfo",
			Handler:    _ClusterStatusService_GetKafkaInfo_Handler,
		},
		{
			MethodName: "GetKafkaAuthorizerInfo",
			Handler:    _ClusterStatusService_GetKafkaAuthorizerInfo_Handler,
		},
		{
			MethodName: "GetRedpandaInfo",
			Handler:    _ClusterStatusService_GetRedpandaInfo_Handler,
		},
		{
			MethodName: "GetRedpandaPartitionBalancerStatus",
			Handler:    _ClusterStatusService_GetRedpandaPartitionBalancerStatus_Handler,
		},
		{
			MethodName: "GetConsoleInfo",
			Handler:    _ClusterStatusService_GetConsoleInfo_Handler,
		},
		{
			MethodName: "GetKafkaConnectInfo",
			Handler:    _ClusterStatusService_GetKafkaConnectInfo_Handler,
		},
		{
			MethodName: "GetSchemaRegistryInfo",
			Handler:    _ClusterStatusService_GetSchemaRegistryInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "redpanda/api/console/v1alpha1/cluster_status.proto",
}
