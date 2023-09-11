export type Mail = {
    id: string;
    subject: string;
    body: string;
    isRead: boolean;
    mailbox: Mailbox
    isSelected: boolean;
};

export type Mailbox = 'INBOX' | 'ARCHIVE'
export type MailboxKeys = 'MAILBOX_INBOX' | 'MAILBOX_ARCHIVE';