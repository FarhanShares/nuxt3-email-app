import { Mail } from "~/types";
import { MAILBOX_ARCHIVE, MAILBOX_INBOX } from "~/constants";

export const mockMails: Array<Mail> = [
        {
            id: "9ab511c9-9f97-4ed3-8c68-2f581d69578a",
            subject: "We be archivin' yer mails",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_ARCHIVE,
            isSelected: false,
        },
        {
            id: "c12dff63-5a23-4c3d-9617-67f05c7e8d8d",
            subject: "Archive go brrrrrrr",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_ARCHIVE,
            isSelected: false,
        },
        {
            id: "146a4c02-8f7f-4d9c-952a-2a87b05a7461",
            subject:
                "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: false,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "4d6ea4a2-69c0-4c16-ba11-3c6a3b7c8743",
            subject:
                "[JIRA] (LXQ-8364) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: false,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "9fe001d0-eed5-4322-8bca-f7e8c1931969",
            subject:
                "[JIRA] (LXQ-4836) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: false,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "74f6099b-5db5-40f9-926b-7ad0e8ac2b89",
            subject:
                "[JIRA] (LXQ-9364) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "37c4c2cb-2db0-45b0-96bb-39404e31f34d",
            subject:
                "[JIRA] (LXQ-1093) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "8a09d2e5-e351-4e0e-990f-5c2a798b1171",
            subject:
                "[JIRA] (LXQ-2937) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "6884f8e1-dc18-40d8-8e5b-6e8b13523d91",
            subject:
                "[JIRA] (LXQ-9732) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "d3098233-510d-4f0c-8854-42f3d0bf09c0",
            subject:
                "[JIRA] (LXQ-3629) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "e727f8b2-d53e-4313-9a6f-3b4e157a4824",
            subject:
                "[JIRA] (LXQ-7465) Learning path- file - Existing File -two buttons for viewing the file",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
        {
            id: "3a683e27-81e3-46c8-9b45-065b9e13e7fc",
            subject: "Wave hello with video, reactions and more now in huddles",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, ipsum urna aliquet nunc, nec aliquam nisl nunc quis nisl.",
            isRead: true,
            mailbox: MAILBOX_INBOX,
            isSelected: false,
        },
]

/**
 * To optimize the performance and find emails in O(1) times, converting it to dictionary
 *
 * @returns Record<string, Mail>
 */
export const mockMailsDictionary = () => mockMails.reduce((acc, mail) => {
    acc[mail.id] = mail;
    return acc;
  }, {} as Record<string, Mail>);