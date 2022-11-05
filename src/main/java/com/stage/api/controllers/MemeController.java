package com.stage.api.controllers;

import com.stage.api.models.Meme;
import com.stage.api.security.services.MemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/meme")
public class MemeController {
    @Autowired
    private MemeService memeService;

    @GetMapping("")
    public Iterable<Meme> getMeme(){
        return memeService.getAll();
    }

    @PostMapping("")
    public ResponseEntity<?> createMeme(@RequestParam("image") String imageData) throws UnsupportedEncodingException {
        Meme meme = new Meme();
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] decodedBytes = decoder.decode(imageData.split(",")[1]);
        meme.setImage(decodedBytes);
        memeService.save(meme);

        byte[] encodedBytes = Base64.getEncoder().encode(meme.getImage());
        String data = new String(encodedBytes, "UTF-8");

        HashMap<String, String> map = new HashMap<>();
        map.put("data", data);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Optional<Meme> getMeme(@PathVariable Long id){
        Optional<Meme> optionalMeme = memeService.getById(id);
        return optionalMeme;
    }
}
