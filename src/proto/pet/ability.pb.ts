// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: proto/pet/ability.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export enum PetExtraAbilityType {
  UNSPECIFIED = "UNSPECIFIED",
  TEAM_TECH = "TEAM_TECH",
  ANNUAL_VIP = "ANNUAL_VIP",
  SUPER_NONO = "SUPER_NONO",
  EXTRA_HP = "EXTRA_HP",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function petExtraAbilityTypeFromJSON(object: any): PetExtraAbilityType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PetExtraAbilityType.UNSPECIFIED;
    case 1:
    case "TEAM_TECH":
      return PetExtraAbilityType.TEAM_TECH;
    case 2:
    case "ANNUAL_VIP":
      return PetExtraAbilityType.ANNUAL_VIP;
    case 3:
    case "SUPER_NONO":
      return PetExtraAbilityType.SUPER_NONO;
    case 4:
    case "EXTRA_HP":
      return PetExtraAbilityType.EXTRA_HP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PetExtraAbilityType.UNRECOGNIZED;
  }
}

export function petExtraAbilityTypeToJSON(object: PetExtraAbilityType): string {
  switch (object) {
    case PetExtraAbilityType.UNSPECIFIED:
      return "UNSPECIFIED";
    case PetExtraAbilityType.TEAM_TECH:
      return "TEAM_TECH";
    case PetExtraAbilityType.ANNUAL_VIP:
      return "ANNUAL_VIP";
    case PetExtraAbilityType.SUPER_NONO:
      return "SUPER_NONO";
    case PetExtraAbilityType.EXTRA_HP:
      return "EXTRA_HP";
    case PetExtraAbilityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function petExtraAbilityTypeToNumber(object: PetExtraAbilityType): number {
  switch (object) {
    case PetExtraAbilityType.UNSPECIFIED:
      return 0;
    case PetExtraAbilityType.TEAM_TECH:
      return 1;
    case PetExtraAbilityType.ANNUAL_VIP:
      return 2;
    case PetExtraAbilityType.SUPER_NONO:
      return 3;
    case PetExtraAbilityType.EXTRA_HP:
      return 4;
    case PetExtraAbilityType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface PetAbilityValue {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  spd: number;
}

export interface PetAbilityValueTotal {
  base: PetAbilityValue | undefined;
  pvp: PetAbilityValue | undefined;
  pve: PetAbilityValue | undefined;
}

export interface PetExtraAbilityItem {
  type: PetExtraAbilityType;
  value: PetAbilityValue | undefined;
}

function createBasePetAbilityValue(): PetAbilityValue {
  return { hp: 0, atk: 0, def: 0, spAtk: 0, spDef: 0, spd: 0 };
}

export const PetAbilityValue: MessageFns<PetAbilityValue> = {
  encode(message: PetAbilityValue, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hp !== 0) {
      writer.uint32(8).int32(message.hp);
    }
    if (message.atk !== 0) {
      writer.uint32(16).int32(message.atk);
    }
    if (message.def !== 0) {
      writer.uint32(24).int32(message.def);
    }
    if (message.spAtk !== 0) {
      writer.uint32(32).int32(message.spAtk);
    }
    if (message.spDef !== 0) {
      writer.uint32(40).int32(message.spDef);
    }
    if (message.spd !== 0) {
      writer.uint32(48).int32(message.spd);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PetAbilityValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePetAbilityValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.hp = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.atk = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.def = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.spAtk = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.spDef = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.spd = reader.int32();
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

  fromJSON(object: any): PetAbilityValue {
    return {
      hp: isSet(object.hp) ? globalThis.Number(object.hp) : 0,
      atk: isSet(object.atk) ? globalThis.Number(object.atk) : 0,
      def: isSet(object.def) ? globalThis.Number(object.def) : 0,
      spAtk: isSet(object.spAtk) ? globalThis.Number(object.spAtk) : 0,
      spDef: isSet(object.spDef) ? globalThis.Number(object.spDef) : 0,
      spd: isSet(object.spd) ? globalThis.Number(object.spd) : 0,
    };
  },

  toJSON(message: PetAbilityValue): unknown {
    const obj: any = {};
    if (message.hp !== 0) {
      obj.hp = Math.round(message.hp);
    }
    if (message.atk !== 0) {
      obj.atk = Math.round(message.atk);
    }
    if (message.def !== 0) {
      obj.def = Math.round(message.def);
    }
    if (message.spAtk !== 0) {
      obj.spAtk = Math.round(message.spAtk);
    }
    if (message.spDef !== 0) {
      obj.spDef = Math.round(message.spDef);
    }
    if (message.spd !== 0) {
      obj.spd = Math.round(message.spd);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PetAbilityValue>, I>>(base?: I): PetAbilityValue {
    return PetAbilityValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PetAbilityValue>, I>>(object: I): PetAbilityValue {
    const message = createBasePetAbilityValue();
    message.hp = object.hp ?? 0;
    message.atk = object.atk ?? 0;
    message.def = object.def ?? 0;
    message.spAtk = object.spAtk ?? 0;
    message.spDef = object.spDef ?? 0;
    message.spd = object.spd ?? 0;
    return message;
  },
};

function createBasePetAbilityValueTotal(): PetAbilityValueTotal {
  return { base: undefined, pvp: undefined, pve: undefined };
}

export const PetAbilityValueTotal: MessageFns<PetAbilityValueTotal> = {
  encode(message: PetAbilityValueTotal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.base !== undefined) {
      PetAbilityValue.encode(message.base, writer.uint32(10).fork()).join();
    }
    if (message.pvp !== undefined) {
      PetAbilityValue.encode(message.pvp, writer.uint32(18).fork()).join();
    }
    if (message.pve !== undefined) {
      PetAbilityValue.encode(message.pve, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PetAbilityValueTotal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePetAbilityValueTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.base = PetAbilityValue.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pvp = PetAbilityValue.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pve = PetAbilityValue.decode(reader, reader.uint32());
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

  fromJSON(object: any): PetAbilityValueTotal {
    return {
      base: isSet(object.base) ? PetAbilityValue.fromJSON(object.base) : undefined,
      pvp: isSet(object.pvp) ? PetAbilityValue.fromJSON(object.pvp) : undefined,
      pve: isSet(object.pve) ? PetAbilityValue.fromJSON(object.pve) : undefined,
    };
  },

  toJSON(message: PetAbilityValueTotal): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = PetAbilityValue.toJSON(message.base);
    }
    if (message.pvp !== undefined) {
      obj.pvp = PetAbilityValue.toJSON(message.pvp);
    }
    if (message.pve !== undefined) {
      obj.pve = PetAbilityValue.toJSON(message.pve);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PetAbilityValueTotal>, I>>(base?: I): PetAbilityValueTotal {
    return PetAbilityValueTotal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PetAbilityValueTotal>, I>>(object: I): PetAbilityValueTotal {
    const message = createBasePetAbilityValueTotal();
    message.base = (object.base !== undefined && object.base !== null)
      ? PetAbilityValue.fromPartial(object.base)
      : undefined;
    message.pvp = (object.pvp !== undefined && object.pvp !== null)
      ? PetAbilityValue.fromPartial(object.pvp)
      : undefined;
    message.pve = (object.pve !== undefined && object.pve !== null)
      ? PetAbilityValue.fromPartial(object.pve)
      : undefined;
    return message;
  },
};

function createBasePetExtraAbilityItem(): PetExtraAbilityItem {
  return { type: PetExtraAbilityType.UNSPECIFIED, value: undefined };
}

export const PetExtraAbilityItem: MessageFns<PetExtraAbilityItem> = {
  encode(message: PetExtraAbilityItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== PetExtraAbilityType.UNSPECIFIED) {
      writer.uint32(8).int32(petExtraAbilityTypeToNumber(message.type));
    }
    if (message.value !== undefined) {
      PetAbilityValue.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PetExtraAbilityItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePetExtraAbilityItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = petExtraAbilityTypeFromJSON(reader.int32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = PetAbilityValue.decode(reader, reader.uint32());
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

  fromJSON(object: any): PetExtraAbilityItem {
    return {
      type: isSet(object.type) ? petExtraAbilityTypeFromJSON(object.type) : PetExtraAbilityType.UNSPECIFIED,
      value: isSet(object.value) ? PetAbilityValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PetExtraAbilityItem): unknown {
    const obj: any = {};
    if (message.type !== PetExtraAbilityType.UNSPECIFIED) {
      obj.type = petExtraAbilityTypeToJSON(message.type);
    }
    if (message.value !== undefined) {
      obj.value = PetAbilityValue.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PetExtraAbilityItem>, I>>(base?: I): PetExtraAbilityItem {
    return PetExtraAbilityItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PetExtraAbilityItem>, I>>(object: I): PetExtraAbilityItem {
    const message = createBasePetExtraAbilityItem();
    message.type = object.type ?? PetExtraAbilityType.UNSPECIFIED;
    message.value = (object.value !== undefined && object.value !== null)
      ? PetAbilityValue.fromPartial(object.value)
      : undefined;
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