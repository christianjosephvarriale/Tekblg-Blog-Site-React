from pytube import YouTube
import sys
import time
import requests
import os

def complete_cb():
    ''' calls the endpoint with final val '''

    requests.post('http://tekblg.com/tools/update_progress', data={ 'id' : vid_id, 'progress' : 1 }, verify=False)


def progress_cb(self, chunk, fh, bytes_remaining):
    ''' callback to track the data progress '''

    global start
    global fle_size
    current = time.time()
    time_elasped = current - start

    if time_elasped > 1: # make updated progress request to webhook
        percentage_downloaded = round( ( ( float(fle_size - bytes_remaining) ) / float(fle_size)), 2)
        requests.post('http://tekblg.com/tools/update_progress', data={ 'id' : vid_id, 'progress' : percentage_downloaded }, verify=False)
        start = time.time()

start = time.time()
url = sys.argv[2]
vid_id = sys.argv[1] 

yt = YouTube(
    url=url,
    on_progress_callback=progress_cb,
    on_complete_callback=complete_cb
)

fle = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
fle_size = fle.filesize
fle.download(output_path="public", filename=f'video-{vid_id}')

