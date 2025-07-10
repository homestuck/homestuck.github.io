export const base = {
  '@font-face': {
    'font-family': 'Homestuck',
    'font-style': 'normal',
    'font-weight': 400,
    'font-display': 'swap',
    src: `url(data:application/octet-stream;base64,d09GMgABAAAAABtIAA8AAAAAS9QAABrsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4bhHAcIAZgAIUaEQgK8GDXIAuDOgABNgIkA4ZwBCAFiX4Hg38bUjwF7NgjsHEAnkCvGtn/pwQ6RNZuNwXw6mDBgpdIR9VKh1G62ru7GkWFunq/O63R1mjtRbsKYBxKPIRXPFfv58/o51H09+SIMIwr4JGNNsFzgsfhkJsRksz6D7hp7ydQSeqSulI6EYMycT9251XxbUycweacmP/vXP4BCTOdISoCuOtr0y4FSjJECyjJorypWQY1vR3Pw9+7c9/jwCPIZCwqGkvHEg/op9kEiijbcHYBLEEYrKvQssrVke9Bb/ouwmLeaOSPxohkYuiqK9rL/3GAn8fT/iRlPbDw76qflx7ItmcVk5qcxelgP13mvzfeIs2sdTClARQYxM4e5ZyrVrTpv5V0+gFpgISA7//3Ta2nKJ6Z3V8A9jq7bLsFdk7GAVW9+0pt8wCiz34FZAiRuqrbGiIP/wKAIZLsBXS3WgsYgDCR2/WgltZfUz/pPl8pDTWlFcBKRTAAWqunp7+W10rOlvVtXelFq13PyPp3Kb0Pr9XpBZWK/oQFBXbIQ3mCGkA8AIaALLpJhGZWwSSYfbv8pX4FGdPLJ9PJyciqWIutkMWiKAoskH6V9L37RQEgAHjSjMwBgOY6gNv49stl5VQjADbPwoDA4jmCCMC7hU+Ei8BDHewyE8IrGEiaB4auXEYlhAi+0gBEf4A6dzFfgzZL4hUqV6vdJA1d1slnMUtsZJFjZyZ7KU6uabRm2Hbfzkf4hAgOcx7Bdr4YwRuEP0A4RArJ/HLpeMurxFQEBayD9f5GE5COEsET5sJCWB0TArfgLZgVOBfne0AipCRiIZi6BSlJAYPjkwMNDqYkzC1H4BJHEQsJVoMc1opbmQI64V8962n9tc6BQqwj9I67QlLMQgFA1Ug9rKEsjQ5QKCiYS7YCX/B1zLWB2G2YC6vhlqIYcP5ZE1xYceDJhx9/gYKECBchioRUrKnmqlavQZNmLVq16dajV5+BWBNOkirASwFYJiWpxBAx8V0LsOT2ntBm2QlzOCWLj+no2qVQAr1lhcmhql9QtQECAPq33wEEjAGw0kktMpVPxbdfRGcB1isRAgeXHapSp1GLLr0GaLz0r/8TltlpjxA7Y5nJRq/1Rl9uo887KAUHwUVwF7yFWGGucBx1c2fcT/fL/XZ3cF/ojv/wyv8CQZkqNRo069RjwIgndLjTZ6Ut3n7TfZ5NXwp2gtPxSUFi/DdXz9iMGDZkUK8eXdq1adHsEpNHu0pFkzcJ6/ev8d+LBR91dC26Rl2DrlZXpcvQxes8Xje/uvfq9qvJVxOvBl4lvzoR9nM8RTjMJT00PoiY42IYrWFFYj39WQ3Nb+iNzj8GN3cPTy9vH18//4DAoOCQ0LDwiMioaEmMNNYEXyAUiSVSmVyhxKoCtUar0xMaGEOHjp06d+narXuPnr169+nbD5nMk6fOXWSx2wqLi0rKKsorq2qqax3ciuUrIVVV1tXWNwA74B9g//hJl2HsDGj/O43nt0ejAJB1P9Yj7xeah3vtWzg+X21rH5+4rpq8Wo2mx917t+88e47Dr2uc3NHpidm5K5f37z59OyExvrl/+AAYnD2HAID+5zW8+OFBvUCXgcUXsP4AAABOQI3PHGOC+FuqyDJbYCQLJYnnkq1oBGrUjV6fQ3hKpjcE+NgEYvcpJYE8u+4RRIqrdNsOvadKMwKWMhORVswmQJsywATEllRN9bLfyFM1dl1daY9c5lA9XL7NK+tZwLZukFQ/6dNy/RbxKxbdYGv2257t8EaH6Irtep0+PIZLx9mybaMfIg6HT7mNUokIFu3d1dT9rpthdMvAuSjN3GY9+5if1oH5Hpl5t1Blz1S7TsxZ2Kt2u7z8blslB/MtuIpsT/HmnBNzFsXR8lIylBSVg1COE3MWtuUPG3HoNGXM54OJudf5gZTDp8ZFl60HKQdYd6dGHTvwrCuhW/qURXk9xrTOpzVqdf4X8wGZmNX6p2H+BaQmcwoT61lv3Dk4LoULJcT1i5Guwc04YghtiGEiFCNqSkFGLaptZBAeC83otnwOnEBlH1SRNtxSyUjVVaQZoUXJC+5KbUtxWTk0v0ibIj84tjY3wa7XTJUyGp37CdxjwQuYP8KIUvN7CRW+45XYBc3Y6I9vtEbeqMKIFi73m0f3iM3MjrAcSeBO41dV63z14dUc48bcF+oqYvB9UuCgIWJAwo7CqavBMECrxiusSHv5Lb+RJFUOG7LJSpyF7yLXbQwT/8p8IEvATnEqpXe6RAiBaJWB+85L+Ul29QR1RcgxHlSKuIMXPwXXe0uTcAQIgSqrD76RNNcwYPsRl7yENQYEPZQV0yMpgcVrBOq9Bz/IO5jQij+B2da9zflWRbDrqxwocxrzSdLIkMWJDIQL+TMOJotV+Rai0pASQaDUw4OoUosOkZrJoncwytTZtp4GG2iA2DkNHmp4NFyF1SjO8vQtxAjJsliPRW4zl7RxUqqiQHYuiauS7FthjyQC7lGNLz1nh+CZUCJdB+w9jcZajccCXf+dgmC24fGQoEaCZHIiJdZcc6IOsQmkAFKTlgw4/vw1jHodnlWX3By9EZ2NW6VXGUY0Bap2D2DkNmRRrJYlfauGuJtNRZQUJL/G0gI3yne2pvSkQUQ2wy+BuW8MyUHJJXGmigscQY6ktxsOj9YBOiuB30A4uLRQjk2TsSS4l6kuozeegWzQPEQxMYoFTkFqJPJ0nAqFeVrk2hk5n792nFlVRnBKoURjNm9qFYYuv1A6oVQWfzzmKlMOPlWTqgDESYbezSBhQrkmXtxRQQlOW0228L7jegeAAPy6KYtwwZHG4vSImFaQZHLOLaPWmBgLdh+yZjiEEYcsjmEQ8j32TYSzp4lcLraAfmCSNIzMPWeEXh/VYR+IuOkyBky1xTFaGfxrC5i2AGA/Aa3i4LZ1LA92/oxFyOoFJ2+fL61L0O0mxPxbcIPW1M2JoxJGPBFqwHtG/Eb0meoA5qZEg7EeqsKFZFORKXoUkV1iKyqi1JTzUkKUzoEyW09VsQLQQ3Grh5vbkTNHuYihZXi/pCrc7OccDfyI7mlU0oVGkNDioH1DTiRELXft64zX9mdhgrmBWd6SND02EUfpo7edwK/UNyjtCvF4Uk0UlXMNeJX8NtCg80Zm2eKZETKKBPOSrYRE+AnhYaoQIimVcc+MRRr8ZmcfFoNzX3jhwuU6OLlpSqSyNJKjUVEUaqGo1MDllSutMDYlRmuQ/BxKnm8m9g5G6k+OvXojPZV1ZEgtpBWmyUp2sve+ievJrCdD3n0o4hFGZX0JFLuhEJNIanqKkNwIVuWccZEdeiy1swzt7ECzDKcEI14JFJ/Mkt4FQHY5T2uTq3r6ZPd5jq+cpSjj+/6KDeRbDgeVuYW544kaQvvgR5SNnlRVp5BHHqWbN0+yhGr1y2PFa3FxPefoReuO8Wk/e81WXZl8OK9s2u8lEPUEb7skFCmL84SEs1zOXYcWltP5z3/05UckZLuedpUyG2R2VnLe9IeMgcGQHak5xzWv2gkrjJYcRyjQouWTKxRy8tFwqmX/fTCpxuNFeMynSMjhy4PdPcJWq90Y6a+7xISE1ov8/NewchBDcsnsmg7iLqcVJIcKj1xffMq4uTKJ6wKFhGSQUEKR6fjohpNMVlmKbBvkzPBoCpRWPQuQxT/5AAKUqsgc28xIcNAXGZTqyEpOoqaBsFFzxkFD0+ufUu2dZZ3JeZNo4LPO4auCVZ61rfZjS6611srmnJtwfUbPAh/beTt8PFf7mOVNu+lyxVz7+kQXRb9X/hauJJoTEWs0cSbWu5ZbhzqfEnURpWZfTfRJYGSMNHQi7yzvjO+WvuvfqT/Tv3P/V0tfGV9ZXpHOhEFndP8JmKcNmlaLyI/iwwsP79LVRIPPPO/M563m5eqyob/0Ho+Ol0oTpW28dXTr8V4HO++MjHfcK0VuwgGjiKB64daoNlrTkpkgq+YMTHnfnF7VpoZMv8YmtBs4V2fOCc/lGnV91hv95Sfpm29Yw6qiAx2onKmY79CT/we6AmbL39GZCudwnLreproz920aOCOzpXh/t7rp7DPPpk/1Pn/hw/M/TI/61/P/St8cBQffIG11QILup+dOp78ePFLNHKbYAd+f5wW8gAXvkWOPKPpIveAtYJ640nznvOnUylfSKdzh+9Qm/De2dWssPzYp3puQFcy4Hk7mq7bKMiQ60do3w2octFxINfezMslR43S73p7GUPboj1unWtORtVobzt/f4gNcQy6jlFOhb9MmFEAr0wXmjQwDpJlCW2NmlfuqacbQqTrjjZU4zXu5Ad7GqqlQ5gK3wHPs3+PTb16PRwoqtLHOpFyNtVjitE1tyf7N5vIpuMiccon/xlxk/A0lSqZVcizTx3Gxro3POW4ZVVUIwX3M/YraW+bn5qPuR+Ye6cDXu43LthwcUfcfvZ+mlZRVh8cs32Xu0haHx+14UdLkFGe2o5f+O/jy4EtP5dvSLZvY6ep4xFgcnauIStUzqmd0Bvq28frg+qGnX2V1cV8wcz6bW2vP802vpr+9O2qP/vmXZUEbpTKa0CW0NTKrf1EjdmTkaNDWpWap3C5ToV639Oys9IsgBktR4NASDjFryy3tqA42sWxDW0gSSFOkIWgCIZgaVSWSiCjeyFqkmIpzuutcOUUFThe1lroks0VGWWZE1RU9QVlTV30aKqATIht2dx47ZUzLsEpiR9TMFGEcKoMWRqL64bZ+r6hLXObAZ49lRbA79cO1FRucXqbbIEnBkiQRbjCS1KUJdIN0kBWx9MRhBa5Bl26Hq0Nmii6p1tdAkwwH2MgaFMFNRhEmNAa2BTAMGAJL+XWtDaLrGr0o1RNL1yH961COMYxhFW9dh6Jbf9n/BnUIh4A2TIOUkyJdYQCr/6qlIFIXSa2uoQ0hy27RFReBAmRRhgpDFBfCJOxLGO3qVEZuFdQhK0J5olkH2q7a/AY2suaEeZU5z2bVMC0UolY01+THWJ+HAXO/4R8yrzBewfmt86fOP4/q/75HzIxzOrgnYNF8hLHbhQiOBBpMjckUTtdFNkq5XnZIaeYk0GDpEzSApCvsonuTYiKO2bYsxxJB+kQiiVVsIiP0xiSwG87+wvwicLxbkIcKlTFGhQo0CUldxGUpirAa4wMMJYK1MBJGERBADsgY2GZvEziJQ1mRIFZOhLGWRiGDTiStumOwZaP5ryGndSvGWA3mxFKLSP2z3p+VqhlH97PP7XtubE07/IVrtqb/MuY2rdGUG9/2dDAdbKNdg6wZN/KNmsEogA9Cn+gw/MnhXnHzKzpQDMvkMHVDxb9enpb8DXkvQSKflvOytAeZdR2gb9BeY12WL3eIlpcl18jh5R9quUPoKWeEP8PSIXLhtHhLHUuG6gdxKRNM1nxKnhdsafRke6BDLPtodlFCdj/2/+gFb4v8QrysF33bt0x1Xf/7XroJeVV2ZnfKzkoe6/FY5TF5LEvPnJwj0B36s4PS/d6PB7YNrL0pHHF3R7dEIkL9kIVBO/iq9DZ68epCnEHPeuqFPC1uvUOn37VzeiftrXWdmrtafpB5uVNuWZydniUeyAuS6zm38spFn9Qrt54bviga3k1eD/0M8nd5rHG7/ngn1UNekrJcK0ZeEY+mdvyl/3OCDLIkobwodfKM/1PCMjySfTifzcmQdGe78XXSZ0BnNeQmWX4p2yNzIm//emDzQO69nLwo8ntRtDxlrjeCLD7z1kBx4Oa3jYRkFLHYsBd6xXukq4WsBpV6tCrTch6d57d85dMdL99kxL/s5i9az3o30S7I0E3T37Xa9lD3Lq+XW5zrYOHKVCWUsCP0aLbmOcZJwNLQ9Em9eHGImjXJT/W+lLwEr0le/Cx/li7WGGcNLObfwDJsV9kVMnJDvJhoHkI3VuHRlw/lr2QeWOZZbjA8wRDzEOAxN9i5TmUPGD6AiUYC6FcQlRAvNVhgDlYOUi6do8KqUv4UIAlEfkSugHMoWmZZaZEptQqZyqKS2XWxWqVQqJTwX/OyEnnQxPfm9+hQK4xhPrTBaqzHepgFYowxYn1quXXsPRNnQscvdU7KY83yWjnUUJMoKJOXy18/qBqokrMpZ6mzyWfz2BPKsYKZdDJN0Sl0icBQblCgoBPdFpsXi9ES8xJkq4P6egDHAQAnFj8DsIHtmf0ZPGPABujxmu4jkjsa9ZQpz0N1YghjWBbusaSeA6hDeuiYNaOB1jsIodEn+3zhkYReS9sLloHJjJ5wmsdntpwb8OSF6ClSbKqOcLcv5IXJYWKtsPFyYrcGmu0dEdfO1r7MW3EJJsUjwQStNvor5jYRBhiXYDU2Yj2UgBrqzwkv9gwV5vcdiliWobNcqf0AA17QQmGjsJtuV9j2WRwiwsJMR0N90Zlxpj90nZO7Z8wMY3NKG29n0SzH4FVmUL+cO0OY3HS8Dpk8gk31Yda0rjUVkVNgp5rjRA+HdE0KwwcufZ2iCj3kPZv6JaPtR80FwcoAGPP5OR163beaET40fG2T5nyYKt9qROTctNcanb98vs3oHNX6JzxDT+ZnfQGtkJ4gzPgSSXasPA8A6aB7cQJooDpPAELnYpc150PdZ6ETQa3QGkWT7rXIlPllDbbRmHw+pjaM2ecjR2IaietbaGZ+TtFtyTWB1BtSvMHv3rPgofoMncQdcLbM6PR8MA6WmpeE84uhOG8OEK+1Zdcc9QW++KGzgZGU6bUzs5CGF2WOcYZhNIUIW+6mxUwbRrtuzUTk3rk1xahvqPNamWpUXMKinJHa3lBFtk0A1LOBpTs1c4xc3z7RTDpC5ot1zfnQSeiCRkRhnx3RGp0/Xiub0dnMNuPb440/nDxd2PtT07j34s+AeUFGf9Buz5uPrO37u+a6TGPOAYDownvxgKbpPGaSElqbrkNzPhTJhEZEhkahNYpc81xsbc4SDvhiocV659rl/nPhKVAdwH3uAeRzDXaOfbW5JJazv54jjXUhHWNxSoi8S2bLQ1LizHigyGQOJxeLfBR/3Xcn+anP0N0PedldYsLE4F5ct7h775Le6HXB3tzfJ8pB9OCgDSzbHf0yaBYIcZABnxX9/UodoCcOMDhY9G7nnlqWEHAAa9/YM8f7eY04hQM4uc+U4OHWYApmMF0y+xnM6XUz77VlAfDq4XAN9ajcZWqZgyeZJawp4XtcGJ3b4xUtwPPnSkmd+P8TiQcU/p47A/2Pe/gbfBhfnLU0lus+uczHvsN3H4sQZWR0cEFwqtviwFNeE2XLxmVETWlaMrvVtw4mhVxlPN4aIgdYN40t5j6Hdn/65VNRzc5FRX5oEZmQ0c0r1n/Aw2DA0/Z/uTez9bjnRg/DAS9bv2ofhtYl8n+MSumdWfDnrxeOTOsusfJ/8ifXORH5lu5WSZRS9fi247y2zJlxnQ7Y73d06Em/5P/eChtFu4d008a7uUozE/cHzBEFzNyT0Kyb5tZTz9qiZfseVIs+4R38e3Z0jRoxOnBJ57dzGnEBDJjQ/wAeLpF2GHkvaFnnl+y0XCczJ8NiX4u9z4mHzNCGmXZJ4pns6uXrnfa9IE2NdUPl4gH2c+q4WMPUFNMz8aqoXH2uz8x/6R9f7HZhqGxZkqzVqxbZjUrY1Wd7vwTi/L5Zu3HJ4xeOT40fE596vm/7Vf7KKXOUcwviK457XfRy73e3dGL46vg0z1uewSEe8R4Mn+PvncAP3JtTezDA81zYwbVDPDPyZHRXD1+eMeXNvZZMzWGfWzuIhmfOrBrVMnc07SJQl/C8nPwdgjsGBy1c62+62T/svHR8uXJ4YJ+KfyVDRrl2S/M0nRV/oSokUHnVxdvJ1cmLjU1wdaxyyXdydHF1z120OM0ZXmTq9Zk/l5LmhzLL7/TtQK8bfQIE3zx5Nkv2xXqLZ+EfyVG3HQMwAGOwDfv2Xw1i7crA5TsnhPlFv8gvZgBAywDtBfgB6CRgkoCxBcYfmLcBdUDTgPzGnzpgdgNKKk99ZYkEZg4EwRsQDiEQWQix97KMQTmAO2APtyF0agiwglRWpTKTb9zC/UKYK4RyL7gf8wHEwF0ZKsr38c7Kupqw4EH09tH9gRKBnsPOMSorYYEwBJgLvHR8lBkqMIBzIOv3NzjJeaUII/hI6qtlmJ+gFMXAfh7EdpdVtzX6gvKBQI39olzI3FPqmxyuSuXtSBWVS/fUTGfrpQz1T1dGIjNaUsSxwhCXKNRnx7qHwggWshKK8vj8WIZoD2nTZCElPeZliEIxmboCjgZLqoiZc19MpOdWOniyk8L2ndCyqhxO0xR/0JWDsUNWlnQIabMJiSYHGszs5Il3NHa7F4i2Ak19kQKOMcBIvKjPdIhtYpIBZkudfLQIhhi3GOjjhcXCOYIlgnm2g7hfLuj1u2vpw7/RlgGMmUuWIew78swcNtZNLEhkCOA4eLQIFpotBia4bbGI9Yklgnumg7jfSdDrV2/pQ5ZfywAO3WYZIrwJ3ywOveWpOSy2cS5CMYxBfO2QRBAuVJgYgu3GIbOYJC5sFLIQR1EElq4RepJFKD6tCFwBFiPmJpJ0+H+tae7wQ/8AJHcF6mY1pygl+P9Lzt5Qof8dphsDFrIYaDsznEgD75DeYFxsxepZoZjNdQIX/Bn/Eny7NSqPYJyHTDJ5XuPaoygP4UuE5+e1eX+BlA9mMUAcFZy0URbz7sIECxVq0/0dBNctKzg01M4JSxuQpnXO3xeU5dsgJ6EhkMA3jLnmchwhh1nxJ/lfZeOsfeTva5wSwn2FRtqhnvHNxog3wZzriAmxxZckY8YrUbww58ifv3V5BZn1i9oJ/u5+2F/2PIdU3lm8MlVhwuYG5s5z+1mz13sKfrZgB/N/JJN6vck/XNGMiCYih/+fZb31K7f6f1O4Q+XFL5zTyvNvAAxgCA48jGAME5jCjDkLlqxYs2HLjj0Hjpw4c+FK4MadB09evPnwXU3oBxRxsJCr5KsKRaSIaPFjCjFF3sw0080wU6ky5SpUqlKtRq26VYfZxmLrdh06da0/FP3yJ3fQEA8vwZG3ZXtXsgR1KsV7JkmOCa/UK9fkhuuabSdas9OtXa7cdM9td9z1pd1e3fdAiz3Waag9tte//QiNQWfad4TD5qI4ZsSoP2dNGDdp2hSfMm+YMeeKb/TT+sjHWrX5xKdhMOAzn6v2JCxe0nnqtYKI0K5Dtx6TOnW56j0Nho0YjBiJctXKl6dKjUxZHho11pJPuKkILjd0gbMwPiWZ2XOkEWcGBLuYEhr8Z2UA)`,
  },

  '@keyframes marquee': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },

  '@keyframes marquee2': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0%)',
    },
  },
}

/* 5.4s total */
/* Reusing the --text-shadow-outline text-shadow value here because CSS
property values for the shadow color won't resolve properly otherwise. */
/*
   @keyframes text-ultimate-reward {
     0%,
  55.5555%,
  81.4815%,
  100% {
    color: initial;
    --tw-text-shadow-color: var(--color-mspa-100);
    text-shadow:
      -1px -1px 0 var(--tw-text-shadow-color,),
      0px -1px 0 var(--tw-text-shadow-color,),
      1px -1px 0 var(--tw-text-shadow-color,),
      -1px 0px 0 var(--tw-text-shadow-color,),
      1px 0px 0 var(--tw-text-shadow-color,),
      -1px 1px 0 var(--tw-text-shadow-color,),
      0px 1px 0 var(--tw-text-shadow-color,),
      1px 1px 0 var(--tw-text-shadow-color,);
  }
  72.2222%,
  74.0741%,
  75.9259% {
    color: #fff601;
    --tw-text-shadow-color: #f70000;
    text-shadow:
      -1px -1px 0 var(--tw-text-shadow-color,),
      0px -1px 0 var(--tw-text-shadow-color,),
      1px -1px 0 var(--tw-text-shadow-color,),
      -1px 0px 0 var(--tw-text-shadow-color,),
      1px 0px 0 var(--tw-text-shadow-color,),
      -1px 1px 0 var(--tw-text-shadow-color,),
      0px 1px 0 var(--tw-text-shadow-color,),
      1px 1px 0 var(--tw-text-shadow-color,);
  }

  73.5185%,
  75.3704% {
    color: #fefefe;
    --tw-text-shadow-color: black;
    text-shadow:
      -1px -1px 0 var(--tw-text-shadow-color,),
      0px -1px 0 var(--tw-text-shadow-color,),
      1px -1px 0 var(--tw-text-shadow-color,),
      -1px 0px 0 var(--tw-text-shadow-color,),
      1px 0px 0 var(--tw-text-shadow-color,),
      -1px 1px 0 var(--tw-text-shadow-color,),
      0px 1px 0 var(--tw-text-shadow-color,),
      1px 1px 0 var(--tw-text-shadow-color,);
  }
}

@keyframes text-lord-english {
  0%,
  92.8571% {
    color: var(--color-lord-english-yellow);
  }
  7.1429%,
  85.7143% {
    color: var(--color-lord-english-dark-red);
  }
  14.2857%,
  78.5714% {
    color: var(--color-lord-english-blue);
  }
  21.4286%,
  71.4286% {
    color: var(--color-lord-english-green);
  }
  28.5714%,
  64.2857% {
    color: var(--color-lord-english-red);
  }
  35.7143%,
  57.1429% {
    color: var(--color-lord-english-orange);
  }
  42.8571%,
  50% {
    color: var(--color-lord-english-purple);
  }
  100% {
    color: black;
  }
}

@keyframes bg-lord-english {
  0%,
  92.8571% {
    background-color: var(--color-lord-english-yellow);
  }
  7.1429%,
  85.7143% {
    background-color: var(--color-lord-english-dark-red);
  }
  14.2857%,
  78.5714% {
    background-color: var(--color-lord-english-blue);
  }
  21.4286%,
  71.4286% {
    background-color: var(--color-lord-english-green);
  }
  28.5714%,
  64.2857% {
    background-color: var(--color-lord-english-red);
  }
  35.7143%,
  57.1429% {
    background-color: var(--color-lord-english-orange);
  }
  42.8571%,
  50% {
    background-color: var(--color-lord-english-purple);
  }
  100% {
    background-color: black;
  }
}

@keyframes text-trickster {
  0%,
  100% {
    color: var(--color-trickster-red);
  }

  14.2857% {
    color: var(--color-trickster-orange);
  }

  28.5714% {
    color: var(--color-trickster-yellow);
  }

  42.8571% {
    color: var(--color-trickster-green);
  }

  57.1429% {
    color: var(--color-trickster-cyan);
  }

  71.4286% {
    color: var(--color-trickster-blue);
  }

  85.7143% {
    color: var(--color-trickster-purple);
  }
}

@keyframes bg-trickster {
  0%,
  100% {
    background-color: var(--color-trickster-red);
  }

  14.2857% {
    background-color: var(--color-trickster-orange);
  }

  28.5714% {
    background-color: var(--color-trickster-yellow);
  }

  42.8571% {
    background-color: var(--color-trickster-green);
  }

  57.1429% {
    background-color: var(--color-trickster-cyan);
  }

  71.4286% {
    background-color: var(--color-trickster-blue);
  }

  85.7143% {
    background-color: var(--color-trickster-purple);
  }
}

@keyframes text-green-sun {
  0%,
  100% {
    color: #00d246;
  }
  50% {
    color: #00ed4f;
  }
}

@keyframes bg-green-sun {
  0%,
  100% {
    background-color: #00d246;
  }
  50% {
    background-color: #00ed4f;
  }
}

@keyframes bg-universe-red {
  0%,
  100% {
    background-color: #b30000;
  }
  50% {
    background-color: #f20000;
  }
}

@keyframes text-universe-red {
  0%,
  100% {
    color: #b30000;
  }
  50% {
    color: #f20000;
  }
}

@keyframes bg-universe-blue {
  0%,
  100% {
    background-color: #001e82;
  }
  50% {
    background-color: #003bff;
  }
}

@keyframes text-universe-blue {
  0%,
  100% {
    color: #001e82;
  }
  50% {
    color: #003bff;
  }
} */
