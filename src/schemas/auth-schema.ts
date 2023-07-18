import {string} from 'zod';

export const xRefreshTokenSchema = {
    'x-refresh': string().openapi({
        param: {
            name: 'x-refresh',
            in: 'header',
            description: 'Refresh token',
            required: true,
        },
        example: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4OTc0NDFhLWIwM2ItNGRiYy04YjUzLTFmMWI3ZGYzMmIyNSIsImNyZWF0ZV9hdCI6IjIwMjMtMDctMTdUMDM6NDc6MjAuMDQyWiIsInVwZGF0ZV9hdCI6IjIwMjMtMDctMTdUMDM6NDc6MjAuMDQyWiIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsIm5hbWUiOiJQYWJsbyBSaW9zIiwiaWF0IjoxNjg5NjcyOTE4LCJleHAiOjE2ODk2NzY1MTh9.ltd7QrDKTRp9ticxVd0lBsqFh6Cq9rnVdN2c-yos1iyv8lGBKqJy1wxWottTOwiTQH6UKi3wQ6YjhjTd3y46J6aXSCOWM7thBaJSBTJHUsDoZ_tgV3gN1Cf1uTjrQSxwWNG1sOr5TPf37XkLqWWXV0tztpFyaj_VJkrzXPK6hFTHorJ30IVuJ91GRgoCh7fUktxWasujCi7k5_UFrgVAMDJpVOrXdCY6a6Wx9YxpgXu8LAIj3PDMceWaC_cOcWihKH5Yf0wY2bh6yGesxtZXoelM78Zb8xFdSaIjEDHWqmab10d1DIjdoM5cCmp1VZqFfd_sRY1NauRElfbaCkCQZ7Z31n5ZVf5ZCipNOrDJgTm50v0TE2xZeDH1SFhnltME6tXPh3EAPfolraqMWsTvAmbC7jorxs8oNCEihxnX9GTfz1k2cChfd-0_mPMeRO85WpAKpP2RBE_o-p_7nnoUCfulbXukjr-D5BrvaJTkItLN0_taApc2QrU5uYiGHIMsF4Fx0TjzNAG2qsjRDthZnnL8e6VcJHqVmJsVkCrJOpVzKN8_ix9M11gu22603Zojg7KCGLkZ479o6qyaje6xMoBG_SGQgE06C4FT4h8w6DyNrtP1j84mTwPQ7iHQyBtM1sbe2jeiMv5uxDbM4JtjOi5ENffT31X2Pygb65z-ZTU'
    })
}
