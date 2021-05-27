module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/config/importJestDOM.ts'],
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/(mocks|config)/",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__tests__/mocks/styleMock.ts",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__test__/mock/fileMock.ts",
  }
}
