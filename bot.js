import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_member_join(member):
    print('Recognised that a member called ' + member.name + ' joined')
    await client.send_message(member, 'Welcome My brother <3')
    print('Sent message to ' + member.name)
async def on_ready():
    await client.change_presence(game=Game(name='      '))
    print('Ready, Freddy') 


@client.event
async def on_message(message):
    if message.content == '$ssb':
        await client.send_message(message.channel,'South Side Blazers')
    if message.content == '$fuck you':
        em = discord.Embed(description='Well , fuck you too buddy')
        em.set_image(url='https://cdn.discordapp.com/attachments/527487273759932431/530097632698302474/well-fuck-you-too-buddy.jpg')
        await client.send_message(message.channel, embed=em)
    if ('nigger') in message.content:
       await client.delete_message(message)
client.run('NTMwMDM5OTkxNDc3MjA3MDQx.Dw6hqQ.DawV3OL29lpiUuoULWZkyk7RG30')
