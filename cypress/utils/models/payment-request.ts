export class Payment {
    transactionType: string;
    amount: string;
    description: string;
    senderId: string;
    receiverId: string;
    constructor(transactionType: string,
        amount: string,
        description: string,
        senderId: string,
        receiverId: string) {
        this.transactionType = transactionType;
        this.amount = amount;
        this.description = description;
        this.senderId = senderId;
        this.receiverId = receiverId;
    }
}