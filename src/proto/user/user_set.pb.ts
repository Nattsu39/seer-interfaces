// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: proto/user/user_set.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export interface UserSet {
  equip: number[];
  achievement: number;
}

function createBaseUserSet(): UserSet {
  return { equip: [], achievement: 0 };
}

export const UserSet: MessageFns<UserSet> = {
  encode(message: UserSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.equip) {
      writer.int32(v);
    }
    writer.join();
    if (message.achievement !== 0) {
      writer.uint32(16).int32(message.achievement);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.equip.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.equip.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.achievement = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSet {
    return {
      equip: globalThis.Array.isArray(object?.equip) ? object.equip.map((e: any) => globalThis.Number(e)) : [],
      achievement: isSet(object.achievement) ? globalThis.Number(object.achievement) : 0,
    };
  },

  toJSON(message: UserSet): unknown {
    const obj: any = {};
    if (message.equip?.length) {
      obj.equip = message.equip.map((e) => Math.round(e));
    }
    if (message.achievement !== 0) {
      obj.achievement = Math.round(message.achievement);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSet>, I>>(base?: I): UserSet {
    return UserSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSet>, I>>(object: I): UserSet {
    const message = createBaseUserSet();
    message.equip = object.equip?.map((e) => e) || [];
    message.achievement = object.achievement ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string; value: unknown } ? { $case: T["$case"]; value?: DeepPartial<T["value"]> }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}