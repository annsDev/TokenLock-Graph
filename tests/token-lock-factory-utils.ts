import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  TokenLockCreated,
  TotalValueLocked,
  updateToken
} from "../generated/TokenLockFactory/TokenLockFactory"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenLockCreatedEvent(
  tokenAddress: Address,
  ownerAddress: Address,
  tokenLock: Address,
  amount: BigInt,
  lockTime: BigInt,
  releaseTime: BigInt,
  title: string,
  _vesting: boolean,
  TGETime: BigInt,
  TGEPercentage: BigInt,
  Cycles: BigInt,
  cycleRealsePercent: BigInt
): TokenLockCreated {
  let tokenLockCreatedEvent = changetype<TokenLockCreated>(newMockEvent())

  tokenLockCreatedEvent.parameters = new Array()

  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam("tokenLock", ethereum.Value.fromAddress(tokenLock))
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "lockTime",
      ethereum.Value.fromUnsignedBigInt(lockTime)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "releaseTime",
      ethereum.Value.fromUnsignedBigInt(releaseTime)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam("_vesting", ethereum.Value.fromBoolean(_vesting))
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "TGETime",
      ethereum.Value.fromUnsignedBigInt(TGETime)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "TGEPercentage",
      ethereum.Value.fromUnsignedBigInt(TGEPercentage)
    )
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam("Cycles", ethereum.Value.fromUnsignedBigInt(Cycles))
  )
  tokenLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "cycleRealsePercent",
      ethereum.Value.fromUnsignedBigInt(cycleRealsePercent)
    )
  )

  return tokenLockCreatedEvent
}

export function createTotalValueLockedEvent(param0: BigInt): TotalValueLocked {
  let totalValueLockedEvent = changetype<TotalValueLocked>(newMockEvent())

  totalValueLockedEvent.parameters = new Array()

  totalValueLockedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return totalValueLockedEvent
}

export function createupdateTokenEvent(newTokens: Address): updateToken {
  let updateTokenEvent = changetype<updateToken>(newMockEvent())

  updateTokenEvent.parameters = new Array()

  updateTokenEvent.parameters.push(
    new ethereum.EventParam("newTokens", ethereum.Value.fromAddress(newTokens))
  )

  return updateTokenEvent
}
