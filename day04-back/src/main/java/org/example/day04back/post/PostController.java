package org.example.day04back.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://127.0.0.1:5500/")
@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public void create(String title) {
        postService.save(title);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/read")
    public ResponseEntity<List<PostReadResponse>> read(String word) {
        return ResponseEntity.ok(postService.read(word));
    }
}
