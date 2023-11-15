import {
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenLockCreated as TokenLockCreatedEvent,
  TotalValueLocked as TotalValueLockedEvent,
  updateToken as updateTokenEvent
} from "../generated/TokenLockFactory/TokenLockFactory"
import {
  OwnershipTransferred,
  TokenLockCreated,
  TotalValueLocked,
  updateToken
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenLockCreated(event: TokenLockCreatedEvent): void {
  let entity = new TokenLockCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.ownerAddress = event.params.ownerAddress
  entity.tokenLock = event.params.tokenLock
  entity.amount = event.params.amount
  entity.lockTime = event.params.lockTime
  entity.releaseTime = event.params.releaseTime
  entity.title = event.params.title
  entity._vesting = event.params._vesting
  entity.TGETime = event.params.TGETime
  entity.TGEPercentage = event.params.TGEPercentage
  entity.Cycles = event.params.Cycles
  entity.cycleRealsePercent = event.params.cycleRealsePercent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTotalValueLocked(event: TotalValueLockedEvent): void {
  let entity = new TotalValueLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleupdateToken(event: updateTokenEvent): void {
  let entity = new updateToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newTokens = event.params.newTokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
