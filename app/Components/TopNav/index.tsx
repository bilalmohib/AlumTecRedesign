import React, { useEffect, useState, useRef } from "react";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const TopNav = () => {

    const [sunriseTime, setSunriseTime] = useState<string>("");
    const [sunsetTime, setSunsetTime] = useState<string>("");
    const [hijriDate, setHijriDate] = useState<string>("");

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    let audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        // @ts-ignore
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handleStop = () => {
        // @ts-ignore
        audioRef.current.pause();
        // @ts-ignore
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    useEffect(() => {
        // Sunrise time
        const date = new Date();

        const optionsSunRise: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: "Asia/Karachi",
        };

        const optionsSunSet: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: "Asia/Karachi",
        };

        const sunrise = date.toLocaleTimeString("en-US", optionsSunRise);

        // Sunset time
        const sunset = date.toLocaleTimeString("en-US", optionsSunSet);

        const hijri = new Intl.DateTimeFormat("en-US-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(date);

        setSunriseTime(sunrise);
        setSunsetTime(sunset);
        setHijriDate(hijri);
    }, []);

    return (
        <Box
            onLoad={
                () => {
                    // @ts-ignore
                    // audioRef.current.play();
                    // setIsPlaying(true);
                }
            }
            component={"div"}
            sx={{ backgroundColor: "#06989e" }}
        >
            <Box
                sx={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: 50,
                    // border: "1px solid red",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "lighter"
                }}
            >
                <audio ref={audioRef}
                    onEnded={() => setIsPlaying(true)}
                    // start playing automatically
                    // autoPlay
                    // loop the audio
                    // loop
                    // hide the audio controls
                    controls={false}
                    // set the audio src
                    src="/Audio/tarana.mp3"
                    // set the audio preload
                    preload="auto"
                    // set the audio volume
                    // @ts-ignore
                    volume={0.1}
                    // mute the audio
                    muted={false}
                >
                </audio>
                <Box>
                    <Box sx={{ height: 50, paddingTop: 1, display: "flex" }}>
                        <Box sx={{ display: "flex" }}>
                            <CalendarMonthIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                {
                                    //current hijri islamic data
                                    hijriDate
                                }
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: 3 }}>
                            <WbSunnyIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                Sun rise at &nbsp;
                                {sunriseTime}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: 3 }}>
                            <NightlightRoundIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                Sun set at
                                &nbsp;
                                {sunsetTime}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ height: 50, display: "flex" }}>
                        <Button
                            variant="contained"
                            sx={{
                                height: "100%",
                                textTransform: "none",
                                fontWeight: "lighter",
                                fontSize: 20,
                                borderRadius: 0,
                                backgroundColor: "#2726b5",
                                '&&:hover': {
                                    backgroundColor: "#40448a",
                                }
                            }}
                        >
                            Support Us
                        </Button>
                        <Button
                            onClick={isPlaying ? handleStop : handlePlay}
                            variant="outlined"
                            sx={{
                                fontSize: 20,
                                color: "white",
                                border: "none",
                                textTransform: "none",
                                '&&:hover': {
                                    border: "none",
                                }
                            }}
                            startIcon={
                                isPlaying ? (
                                    <VolumeUpIcon
                                        fontSize="large"
                                        sx={{
                                            color: "white",
                                            fontSize: 30,
                                        }}

                                    />
                                ) : (
                                    <VolumeOffIcon
                                        fontSize="large"
                                        sx={{
                                            color: "white",
                                            fontSize: 30,
                                        }}

                                    />
                                )
                            }
                        >
                            {isPlaying ? "Off" : "On"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default TopNav;