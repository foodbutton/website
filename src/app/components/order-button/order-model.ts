export class Order {
    constructor(
        public identityId: string,
        public deliveryAddress: any,
        public preferences: any,
        public stripeData: any
    ) {}
}