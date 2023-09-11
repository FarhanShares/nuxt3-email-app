import { defineStore } from "pinia";
import { Mail, Mailbox } from "~/types";
import { mockMailsDictionary } from '~/mocks'
import { MAILBOX_ARCHIVE, MAILBOX_INBOX } from "~/constants";

export const useMailStore = defineStore("mailStore", () => {
    // states
    const mails = ref<Record<string, Mail>>(mockMailsDictionary());


    // getters
    const getInbox = computed(() => Object.values(mails.value).filter(mail => mail.mailbox === MAILBOX_INBOX))
    const getArchive = computed(() => Object.values(mails.value).filter(mail => mail.mailbox === MAILBOX_ARCHIVE))
    const getMailboxes = computed(() => ({
        [MAILBOX_INBOX]: getInbox.value,
        [MAILBOX_ARCHIVE]: getArchive.value,
    })) as ComputedRef<{ INBOX: Mail[]; ARCHIVE: Mail[] }>;

    const getSelectedMails = computed(() => Object.values(mails.value).filter(mail => mail.isSelected === true))
    const getSelectedMailsFromInbox = computed(() => getInbox.value.filter(mail => mail.isSelected === true && mail.mailbox === MAILBOX_INBOX))
    const getSelectedMailsFromArchive = computed(() => getArchive.value.filter(mail => mail.isSelected === true && mail.mailbox === MAILBOX_ARCHIVE))


    // actions
    /**
     * Move from one mailbox to another by a mail id
     *
     * @param mailId
     * @param to Mailbox
     * @returns void
     */
    const moveTo = (mailId: Mail["id"], to: Mailbox = MAILBOX_ARCHIVE) => {
        if (!(mailId in mails.value)) return

        mails.value[mailId].mailbox = to
    }

    /**
     * Mark email as read
     *
     * @param mailId
     * @param flag
     * @returns void
     */
    const markAsRead = (mailId: Mail["id"], flag = true) => {
        if (!(mailId in mails.value)) return

        mails.value[mailId].isRead = flag;
    }

    /**
     * Mark all selected emails as read from a specific mailbox
     *
     * @param from Mailbox
     * @returns void
     */
    function markAsReadFromSelected(from: Mailbox) {
        const mailbox = from === MAILBOX_INBOX ? getSelectedMailsFromInbox : getSelectedMailsFromArchive
        mailbox.value.forEach((mail) => {
            // mark
            markAsRead(mail.id)
            // deselect
            selectOne({ mailId: mail.id, flag: false })
        })
    }

    /**
     * Move inbox mails to archive from selected mails
     *
     * @returns void
     */
    const moveToArchiveFromSelected = () => {
        getSelectedMailsFromInbox.value.forEach((mail) => {
            // move
            moveTo(mail.id, MAILBOX_ARCHIVE)
            // deselect
            selectOne({ mailId: mail.id, flag: false })
        })
    }

    /**
     * Toggle or force a selection flag to a mail by it's id
     *
     * When the flag is null, it toggles, otherwise, it sets the boolean flag.
     *
     * @param param SelectOneArgs
     * @returns void
     */
    const selectOne = ({ mailId, flag = null }: SelectOneArgs) => {
        if (!(mailId in mails.value)) return

        mails.value[mailId].isSelected = flag === null ? !mails.value[mailId].isSelected : flag;
    }
    type SelectOneArgs = { mailId: Mail["id"], flag?: boolean | null }

   /**
    * Toggle or force a selection flag to all mails in a specific mailbox
    *
    * When the flag is null, it toggles, otherwise, it sets the boolean flag.
    *
    * @param param SelectAllArgs
    * @returns void
    */
    const selectAll = ({ mailbox, flag = null } : SelectAllArgs) => {
        getMailboxes.value[mailbox].forEach(mail => {
            mails.value[mail.id].isSelected =  flag === null ? !mails.value[mail.id].isSelected : flag
        })
    }
    type SelectAllArgs = { mailbox: Mailbox, flag?: boolean | null }


    return {
        // states
        mails,
        // getters
        getInbox,
        getArchive,
        getMailboxes,
        getSelectedMails,
        getSelectedMailsFromInbox,
        getSelectedMailsFromArchive,
        // actions
        moveTo,
        selectOne,
        selectAll,
        markAsRead,
        markAsReadFromSelected,
        moveToArchiveFromSelected,
    };
});
