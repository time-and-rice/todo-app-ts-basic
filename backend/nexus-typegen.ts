/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Task: { // root type
    completed: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createTask: NexusGenRootTypes['Task']; // Task!
    deleteTask: NexusGenRootTypes['Task']; // Task!
    toggleTaskCompleted: NexusGenRootTypes['Task']; // Task!
    updateTask: NexusGenRootTypes['Task']; // Task!
  }
  Query: { // field return type
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Task: { // field return type
    completed: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createTask: 'Task'
    deleteTask: 'Task'
    toggleTaskCompleted: 'Task'
    updateTask: 'Task'
  }
  Query: { // field return type name
    tasks: 'Task'
  }
  Task: { // field return type name
    completed: 'Boolean'
    createdAt: 'DateTime'
    id: 'Int'
    title: 'String'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createTask: { // args
      title: string; // String!
    }
    deleteTask: { // args
      taskId: number; // Int!
    }
    toggleTaskCompleted: { // args
      taskId: number; // Int!
    }
    updateTask: { // args
      taskId: number; // Int!
      title: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}