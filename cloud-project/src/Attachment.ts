export interface Attachment {
	fileId: string;
	fileName: string;
	contentType: string | undefined;
	token: string | null;
	body: any;
}
