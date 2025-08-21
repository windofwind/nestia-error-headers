export namespace Base {
    export interface headers {
        /**
         * 인증정보
         *
         * @hidden
         * @memberof Headers
         */
        authorization?: string;

        /**
         * 인증정보-decode
         *
         * @hidden
         * @memberof Headers
         */
        user?: {
            email:string;
        }
    }
}