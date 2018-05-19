@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
:: pause 
echo.
::============================================================================= 
:: https://code.visualstudio.com/docs/editor/tasks
echo "GggMessage: calling tsc --init." 
echo.
call tsc --init
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul