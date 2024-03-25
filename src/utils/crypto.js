import CryptoJS from 'crypto-js/crypto-js'

const key = CryptoJS.enc.Utf8.parse('gSMo345678dGLkMg') // 密钥 后端提供
const iv = CryptoJS.enc.Utf8.parse('YGhjNEIMVMJ6I6iK') // 偏移量

/**
 * AES加密 ：字符串 key iv  返回base64
 */
export function Encrypt(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString().toUpperCase()
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *  */
export function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const src = CryptoJS.enc.Base64.stringify(encryptedHexStr)

  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  return decrypt.toString(CryptoJS.enc.Utf8).toString()
}
