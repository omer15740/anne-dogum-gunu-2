@echo off
rem Open 123.html in Google Chrome if installed, otherwise open with default browser.
setlocal

set "FILE=%~dp0123.html"

set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" "%FILE%"
  goto :eof
)

set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" "%FILE%"
  goto :eof
)

rem If Chrome not found, open with default browser
start "" "%FILE%"
