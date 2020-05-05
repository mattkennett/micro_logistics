import DateTimeFormat = Intl.DateTimeFormat;

export class SiteUser {
  constructor(
    public needsRefresh?: boolean,
    public password?: string,
    public id?: number,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public organization?: string,
    public isAdmin?: boolean,
    public isActivated?: boolean,
    public emailVerified?: boolean,
    public providesStock?: boolean,
    public needsStock?: boolean,
    public street1?: string,
    public street2?: string,
    public city?: string,
    public county?: string,
    public state?: string,
    public zip?: string,
    public phone?: string,
  ) { }
}

export class Stock {
  constructor(
    public name?: string,
    public count?: number,
  ) { }
}

export class Claim {
  constructor(
    public id?: number,
    public claimedById?: number,
    public claimedFromId?: number,
    public stockType?: string,
    public count?: number,
    public deliveryTimestamp?: DateTimeFormat,
  ) { }
}

export class StockType {
  constructor(
      public id?: number,
      public name?: string,
      public description?: string,
  ) { }
}
