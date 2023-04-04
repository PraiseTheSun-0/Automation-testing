export class Transaction {
    amount: number;
    createdAt: string;
    description: string;
    id: string;
    modifiedAt: string;
    privacyLevel: string;
    receiverId: string;
    senderId: string;
    status: string;
    uuid: string;
    transactionType: string;
    constructor(amount: number,
        createdAt: string,
        description: string,
        id: string,
        modifiedAt: string,
        privacyLevel: string,
        receiverId: string,
        senderId: string,
        status: string,
        uuid: string,
        transactionType: string) {
        this.amount = amount;
        this.createdAt = createdAt;
        this.description = description;
        this.id = id;
        this.modifiedAt = modifiedAt;
        this.privacyLevel = privacyLevel;
        this.receiverId = receiverId;
        this.senderId = senderId;
        this.status = status;
        this.uuid = uuid;
        this.transactionType = transactionType;
    }
}