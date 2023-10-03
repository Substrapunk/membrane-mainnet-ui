/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export type Decimal = string;
export interface Config {
  auction_contract?: Addr | null;
  fee_wait_period: number;
  governance_contract?: Addr | null;
  incentive_schedule: StakeDistribution;
  keep_raw_cdt: boolean;
  max_commission_rate: Decimal;
  mbrn_denom: string;
  osmosis_proxy?: Addr | null;
  owner: Addr;
  positions_contract?: Addr | null;
  unstaking_period: number;
  vesting_contract?: Addr | null;
  vesting_rev_multiplier: Decimal;
}
export interface StakeDistribution {
  duration: number;
  rate: Decimal;
}
export type Uint128 = string;
export interface DelegationResponse {
  delegation_info: DelegationInfo;
  user: Addr;
}
export interface DelegationInfo {
  commission: Decimal;
  delegated: Delegation[];
  delegated_to: Delegation[];
}
export interface Delegation {
  amount: Uint128;
  delegate: Addr;
  fluidity: boolean;
  time_of_delegation: number;
  voting_power_delegation: boolean;
}
export type ExecuteMsg = {
  update_config: {
    auction_contract?: string | null;
    fee_wait_period?: number | null;
    governance_contract?: string | null;
    incentive_schedule?: StakeDistribution | null;
    keep_raw_cdt?: boolean | null;
    max_commission_rate?: Decimal | null;
    mbrn_denom?: string | null;
    osmosis_proxy?: string | null;
    owner?: string | null;
    positions_contract?: string | null;
    unstaking_period?: number | null;
    vesting_contract?: string | null;
    vesting_rev_multiplier?: Decimal | null;
  };
} | {
  stake: {
    user?: string | null;
  };
} | {
  unstake: {
    mbrn_amount?: Uint128 | null;
  };
} | {
  restake: {
    mbrn_amount: Uint128;
  };
} | {
  claim_rewards: {
    restake: boolean;
    send_to?: string | null;
  };
} | {
  update_delegations: {
    commission?: Decimal | null;
    delegate?: boolean | null;
    fluid?: boolean | null;
    governator_addr?: string | null;
    mbrn_amount?: Uint128 | null;
    voting_power_delegation?: boolean | null;
  };
} | {
  delegate_fluid_delegations: {
    governator_addr: string;
    mbrn_amount?: Uint128 | null;
  };
} | {
  deposit_fee: {};
} | {
  trim_fee_events: {};
};
export type AssetInfo = {
  token: {
    address: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
export interface FeeEventsResponse {
  fee_events: FeeEvent[];
}
export interface FeeEvent {
  fee: LiqAsset;
  time_of_event: number;
}
export interface LiqAsset {
  amount: Decimal;
  info: AssetInfo;
}
export interface InstantiateMsg {
  auction_contract?: string | null;
  fee_wait_period?: number | null;
  governance_contract?: string | null;
  incentive_schedule?: StakeDistribution | null;
  mbrn_denom: string;
  osmosis_proxy?: string | null;
  owner?: string | null;
  positions_contract?: string | null;
  unstaking_period?: number | null;
  vesting_contract?: string | null;
}
export type QueryMsg = {
  config: {};
} | {
  user_stake: {
    staker: string;
  };
} | {
  user_rewards: {
    user: string;
  };
} | {
  staked: {
    end_before?: number | null;
    limit?: number | null;
    start_after?: number | null;
    unstaking: boolean;
  };
} | {
  delegations: {
    limit?: number | null;
    start_after?: string | null;
    user?: string | null;
  };
} | {
  fee_events: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  total_staked: {};
} | {
  incentive_schedule: {};
};
export interface RewardsResponse {
  accrued_interest: Uint128;
  claimables: Asset[];
}
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
}
export interface StakeDistributionLog {
  ownership_distribution: StakeDistribution;
  start_time: number;
}
export interface StakedResponse {
  stakers: StakeDeposit[];
}
export interface StakeDeposit {
  amount: Uint128;
  stake_time: number;
  staker: Addr;
  unstake_start_time?: number | null;
}
export interface StakerResponse {
  deposit_list: StakeDeposit[];
  staker: string;
  total_staked: Uint128;
}
export interface TotalStakedResponse {
  total_not_including_vested: Uint128;
  vested_total: Uint128;
}