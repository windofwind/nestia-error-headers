export namespace Base {
    export interface headers {
        /**
         * 인증정보
         *
         * @hidden
         * @memberof Headers
         */
        authorization: string;
        user?: {
            name: string;
            email: string;
        }
    }
}